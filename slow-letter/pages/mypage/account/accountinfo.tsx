import SettingItems from "../../../components/setting-Items";
import { ChangeEvent, useState, useEffect } from "react";
import {
  Button,
  Modal,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useStore } from "../../../components/zustand_stores/store";

type InputEvent = ChangeEvent<HTMLInputElement>;

export default function Mypage() {
  const {
    isOpen: isSaveOpen,
    onOpen: onSaveOpen,
    onClose: onSaveClose,
  } = useDisclosure();
  const {
    isOpen: isCancelOpen,
    onOpen: onCancelOpen,
    onClose: onCancelClose,
  } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const userToken: string = useStore((state: any) => state.userToken);

  const [Email, setEmail] = useState("Example@Example.com");
  const [profile, setProfile] = useState<{
    phone: string;
    bio: string;
    pic: string | File;
    name: string;
  }>({
    phone: "",
    bio: "",
    name: "Username",
    pic: "/defaultProfile.svg",
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users-info`)
      .then((res) => {
        setEmail(res.data.payload.email);

        setProfile((prevState) => {
          return {
            ...prevState,
            phone: res.data.payload.phone,
          };
        });
        setProfile((prevState) => {
          return {
            ...prevState,
            name: res.data.payload.name,
          };
        });
        setProfile((prevState) => {
          return {
            ...prevState,
            bio: res.data.payload.bio,
          };
        });
        setProfile((prevState) => {
          return {
            ...prevState,
            pic: res.data.payload.profileImageUrl,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function eventread(e: InputEvent) {
    if (e.target.files === null) {
      return;
    } else {
      const file = e.target.files[0];
      console.log(file);
      setProfile({
        ...profile,
        pic: file,
      });
    }
  }

  function onNameChange(e: InputEvent) {
    const nameValue = e?.target.value;
    setProfile({
      ...profile,
      name: nameValue,
    });
  }

  function onPhoneChange(e: InputEvent) {
    const value = e?.target.value;
    setProfile({
      ...profile,
      phone: value,
    });
  }
  function onBioChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const biovalue = e?.target.value;
    setProfile({
      ...profile,
      bio: biovalue,
    });
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"
      />
      {/* background modal */}
      <div className="accountinfo-page flex h-5/6">
        <div className="modal-container bg-white w-full h-full shadow drop-shadow-lg rounded-lg flex flex-col p-3">
          <div className="Account-Header w-40 text-bold italic text-5xl text-blue-600">
            Your account
          </div>

          <div className="Setting-Items flex flex-col mt-28 items-center justify-content">
            <div className="Profilepic-container">
              <input
                className="Pic-input w-10 h-2"
                type="file"
                id="Profilce_pics"
                name="Profile_pics"
                accept=".jpg, .jpeg, .png , .svg"
                onChange={eventread}
              />
            </div>

            <hr className="line mt-10" />

            <div className="email-continer flex w-32 flex-row  py-8">
              <span className="email flex text-black fixed-email font-semibold ">
                Email
              </span>
              <span className="userEmail flex text-black fixed-email z-50 px-2">
                {Email}
              </span>
            </div>

            <hr className="line" />
            <form>
              <SettingItems
                ID="Username"
                Hint="Username"
                Label="Username"
                Types="text"
                onChange={onNameChange}
                values={profile.name}
              />
              <hr className="line" />

              <SettingItems
                ID="Phone"
                Hint="000-0000-0000"
                Label="Phone"
                Types="text"
                onChange={onPhoneChange}
                values={profile.phone}
              />
              <hr className="line" />

              <SettingItems
                ID="Editbio"
                Hint="Place introduce yourself"
                Label="Your Bio"
                Types="string"
                onChangetext={onBioChange}
                values={profile.bio || ""}
              />
            </form>

            <div className="flex items-end justify-end">
              <div className="btn-container flex flex-row space-x-8">
                <Stack direction="row" spacing={4} align="end">
                  <Button
                    onClick={onSaveOpen}
                    colorScheme="blue"
                    background="#2563eb"
                    variant={"solid"}
                    width={"100px"}
                  >
                    Save
                  </Button>
                  {/* Modal for Save confirmation */}
                  <Modal
                    closeOnOverlayClick={false}
                    blockScrollOnMount={false}
                    isOpen={isSaveOpen}
                    onClose={onSaveClose}
                    isCentered
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>
                        Do you really want Save all the Changes?
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody></ModalBody>
                      <ModalFooter>
                        <Stack direction="row" spacing={4}>
                          <Button
                            onClick={() => {
                              onSaveClose();
                              const form = new FormData();
                              form.append("X-AUTH-TOKEN", userToken);
                              form.append("file", profile.pic);
                              form.append("phone", profile.phone);
                              form.append("bio", profile.bio);
                              form.append("name", profile.name);

                              axios
                                .patch(
                                  `${process.env.NEXT_PUBLIC_API_URL}/users-info`,
                                  form,
                                  {
                                    headers: {
                                      "content-type": "multipart/form-data",
                                    },
                                  }
                                )
                                .then((res) => {
                                  toast({
                                    title: "Successfully Done!",
                                    description:
                                      "Changes has susseccfully saved",
                                    status: "success",
                                    position: "bottom",
                                    isClosable: true,
                                    duration: 2000,
                                  });

                                  //router.push("/mypage/account/accountinfo");
                                })
                                .catch((err) => {
                                  console.log(err);
                                  toast({
                                    title: "Something went Wrong!",
                                    description: "Your change have not saved",
                                    status: "error",
                                    position: "bottom",
                                    isClosable: true,
                                    duration: 2000,
                                  });
                                });
                            }}
                            colorScheme="blue"
                            background="blue"
                            width={"100px"}
                          >
                            Save
                          </Button>
                          <Button onClick={onSaveClose} width={"100px"}>
                            Cancel
                          </Button>
                        </Stack>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <Button
                    onClick={onCancelOpen}
                    colorScheme="red"
                    background-color="red"
                    width={"100px"}
                  >
                    Cancel
                  </Button>
                  {/* Modal for Cancel confirmation */}
                  <Modal
                    closeOnOverlayClick={false}
                    blockScrollOnMount={false}
                    isOpen={isCancelOpen}
                    onClose={onCancelClose}
                    isCentered
                  >
                    <ModalOverlay />
                    <ModalContent width={"400px"}>
                      <ModalHeader>
                        Do you really want to reset all the changes?
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        If you do not save, you will lose all the changes
                      </ModalBody>
                      <ModalFooter>
                        <Stack direction="row" spacing={4}>
                          <Button
                            onClick={onCancelClose}
                            colorScheme="red"
                            background="red"
                            width={"100px"}
                          >
                            Continue
                          </Button>
                          <Button onClick={onCancelClose} width={"100px"}>
                            Cancel
                          </Button>
                        </Stack>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .Account-Header {
            width: 300px;
            position: relative;
            top: 20px;
            left: 0.5em;
            font-family: fantasy;
          }
          .modal-container {
            position: relative;
            margin-left: 45vh;
            width: 120vh;
            margin-top: 3vh;
          }
          .Setting-Items {
            position: relative;
            overflow: scroll;
            overflow-x: hidden;
          }

          .line {
            width: 500px;
            text-align: left;
            margin-left: 0px;
          }
          .Profilepic-container {
            position: relative;
            background-image: url({profile.pic});
            background-size: 100% 100%;
            border-radius: 30%;
          }
          .Pic-input {
            outline: none;
            color: transparent;
            position: relative;
            top: 140px;
            width: 200px;
            height: 200px;
            box-sizing: border-box;
            padding: 15px 80px;
            cursor: pointer;
            opacity: 0;
          }
          .Pic-input::-webkit-file-upload-button {
            visibility: hidden;
          }
          .Pic-input::before {
            content: URL("/Cameara.svg");
            color: "blue";

            display: inline-block;
            -webkit-user-select: none;
          }
          .Pic-input:hover {
            opacity: 1;
          }
          .fixed-email {
          }
          .Editbio {
            padding: 4px;
          }
          .email {
            position: relative;
            left: -9.2em;
            font-family: Plus Jakarta Sans;
          }
        `}
      </style>
    </>
  );
}
