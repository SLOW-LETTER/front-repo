import Sidebar from "../../../components/sidebar";
import SettingItems from "../../../components/setting-Items";
import SettingModal from "../../../components/setting-modal";
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
import { apiURL } from "../../../components/apiURL";
import { useRouter } from "next/router";
import { useStore } from "../../../components/zustand_stores/store";

type InputEvent = ChangeEvent<HTMLInputElement>;
interface MySettings {
  pics: File;
}
let Email = "";
let phone = "";
let biotest = "";

export default function Mypage({}: MySettings) {
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

  useEffect(() => {
    axios
      .get(`${apiURL}/users-info`, {
        headers: { "X-AUTH-TOKEN": `${userToken}` },
      })
      .then((res) => {
        console.log(res);
        router.push("/mypage/account/accountinfo");
        profile.Phone = res.data.payload.phone;
        profile.Bio = res.data.payload.bio;
        profile.Pic = res.data.payload.profileImageUrl;
        console.log(profile.Bio);
        console.log(profile.Pic);
        Email = res.data.payload.email;
        console.log(Email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [profile, setProfile] = useState<{
    Phone: string;
    Bio: string;
    Pic: File | string;
  }>({
    Phone: "",
    Bio: "",
    Pic: "/defaultProfile.svg",
  });

  function eventread(e: InputEvent) {
    if (e.target.files === null) {
      return;
    } else {
      const file = e.target.files[0];
      setProfile({
        ...profile,
        Pic: file,
      });
    }
    console.log(profile.Pic);
  }
  function onEmailChange() {}
  function onPhoneChange(e: InputEvent) {
    const value = e?.target.value;
    setProfile({
      ...profile,
      Phone: value,
    });
  }
  function onBioChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const biovalue = e?.target.value;
    setProfile({
      ...profile,
      Bio: biovalue,
    });
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"
      />
      {/* background modal */}
      <SettingModal />
      <div className="Page flex flex-col p-3">
        <div className="Account-Header w-40 text-bold italic text-5xl text-blue-600">
          Your account
        </div>
        <div className="Setting-Items flex flex-col w-2/3 mt-28 items-center justify-content">
          <div className="Profilepic-container">
            <input
              className="Pic-input w-10 h-10"
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
            <span className="flex text-black fixed-email px-2">{Email}</span>
          </div>

          <hr className="line" />

          <SettingItems
            ID="Editphone"
            Hint="000-0000-0000"
            Label="Phone"
            Types="text"
            onChange={onPhoneChange}
            values={profile.Phone}
          />
          <hr className="line" />

          <SettingItems
            ID="Editbio"
            Hint="Place introduce yourself"
            Label="Your Bio"
            Types="string"
            onChangetext={onBioChange}
            values={profile.Bio}
          />
        </div>
        <div className="btn-container flex flex-row justify-end p-4 space-x-8">
          <Stack direction="row" spacing={4} align="end">
            <Button
              onClick={onSaveOpen}
              colorScheme="blue"
              background="blue"
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
                        toast({
                          title: "Successfully Done!",
                          description: "Changes has susseccfully saved",
                          status: "success",
                          position: "bottom",
                          isClosable: true,
                          duration: 2000,
                        });
                        onSaveClose();
                        const form = new FormData();
                        form.append("file", profile.Pic);
                        form.append("phone", profile.Phone);
                        form.append("bio", profile.Bio);
                        axios
                          .patch(`${apiURL}/users-info`, form, {
                            headers: {
                              "X-AUTH-TOKEN": `${userToken}`,
                              "content-type": "multipart/form-data",
                            },
                          })
                          .then((res) => {
                            console.log(res.data.payload?.token);
                            router.push("/mypage/account/accountinfo");
                          })
                          .catch((err) => console.log(err));
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

      <style jsx>
        {`
        .Page-Container{
        }
        .Account-Header {
          width: 300px;
          position: relative;
          top: 20px;
          left: 0.5em;
          font-family: fantasy;
        }
        .Page {
          position: absolute;
          height: 83.333333%;
          width: 66.666667%;
          bottom: 50px;
          right: 130px;  
          overflow:scroll;    
          overflow-x: hidden;  
        }
        .Setting-Items {
          position: absolute;
          top: 3em;
          left:13em;
       }
        .line {
          width: 500px;
          text-align: left;
          margin-left: 0px;
        }
        .Profilepic-container {
          width:px;
          height:px;
          position:relative;
          background-image: url(${profile.Pic});
          background-size:100% 100%; 
          border-radius:30%;
          overflow:hidden;
          
        }
        .Pic-input{
          outline: none;
          color: transparent;
          background: rgba(0,0,0,0.5);
          position:relative;
          top:140px;
          left:px;
          width: 200px;
          height: 200px;
          box-sizing: border-box;
          padding: 15px 77px;
          cursor: pointer
          transition: 0.5s;
          opacity:0;
        }
        .Pic-input::-webkit-file-upload-button{
          visibility: hidden ;
          
        }
        .Pic-input::before{
          content:url("/Cameara.svg");
          color:#fff;
          display: inline-block;
          -webkit-user-select:none;
        }
        .Pic-input:hover{
          opacity:1;
        }
        .fixed-email{    
        }
        .Editbio{
          padding:4px;
        }
        .btn-container{
          position:absolute;
          right:10px;
          bottom:-430px;
        }
        .email{
          position:relative;
          left:-9.2em;
          font-family: Plus Jakarta Sans;
        }
      `}
      </style>
    </>
  );
}
