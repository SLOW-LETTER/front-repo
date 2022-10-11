import {
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { apiURL } from "../../../components/apiURL";
import SettingItems from "../../../components/setting-Items";
import { useStore } from "../../../components/zustand_stores/store";
import { removeCookies } from "../../../function/cookie-handler/cookieHandler";

export default function DeleteAcc() {
  const {
    isOpen: isCheckOpen,
    onOpen: onCheckOpen,
    onClose: onCheckClose,
  } = useDisclosure();
  const toast = useToast();

  const [feedBack, setfeedBack] = useState("");
  const [pswCheck, setpswCheck] = useState("");
  //const [savedPsw, setsavedPsw] = useState("");
  //const [pswValid, setpswValid] = useState(false);
  const router = useRouter();
  const [Email, setEmail] = useState("Example@Example.com");
  const [profileMin, setProfileMin] = useState<{
    pic: string;
    name: string;
  }>({
    name: "Username",
    pic: "/defaultProfile.svg",
  });

  function getFeed(e: ChangeEvent<HTMLTextAreaElement>) {
    setfeedBack(e.target.value.trim());
  }
  function checkPsw(e: ChangeEvent<HTMLInputElement>) {
    setpswCheck(e.target.value.trim());
  }
  useEffect(() => {
    axios
      .get(`${apiURL}/users-info`)
      .then((res) => {
        setEmail(res.data.payload.email);
        setProfileMin((prevState) => {
          return {
            ...prevState,
            name: res.data.payload.name,
          };
        });

        // setProfileMin((prevState) => {
        //   return {
        //     ...prevState,
        //     pic: res.data.payload.profileImageUrl,
        //   };
        // });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="deletaAccount-page flex h-5/6">
        <div className="modal-container bg-white w-full h-full shadow drop-shadow-lg rounded-lg">
          <div className="Page-container flex flex-col items-center space-y-4">
            <div className="Profile-container flex flex-row py-8">
              <Image
                className="Profile-pic round rounded-full "
                src={profileMin.pic}
                width="100"
                height="100"
                border-radius="30%"
              ></Image>
              <div className="ProfileID flex flex-col py-5 px-7">
                <span>{profileMin.name}</span>
                <span>{Email}</span>
              </div>
            </div>
            <span>Are you sure you want to delete your account?</span>
            <span>
              Evething realted to your account will be removed permanently
            </span>
            <span>If you want to continue with deleting your account</span>
            <span>please enter your password below</span>
            <hr className="line py-2" />
            <form>
              <SettingItems
                ID="Checkpsw"
                Hint="*************"
                Label="Password"
                Types="Password"
                values={pswCheck}
                onChange={checkPsw}
              />
            </form>
            <hr className="line py-2" />
            <Button
              onClick={onCheckOpen}
              colorScheme="red"
              background="red.500"
              variant={"solid"}
            >
              Delete Account
            </Button>

            {/* Check the password different modal pops out */}
            <Modal
              closeOnOverlayClick={false}
              blockScrollOnMount={false}
              isOpen={isCheckOpen}
              onClose={onCheckClose}
              isCentered
            >
              <ModalOverlay />
              <ModalContent maxH={800} maxW={600}>
                <ModalHeader fontSize={18} textAlign={"center"}>
                  Your account has been successfully deleted. Before you go,
                  please tell us why you are deleting your account so we can
                  continue improving our service
                </ModalHeader>
                <ModalBody>
                  <form>
                    <textarea
                      className="feedback p-3  h-52 bg-gray-200 border-4 border-blue-300 rounded-lg"
                      maxLength={100}
                      value={feedBack}
                      onChange={getFeed}
                      placeholder="Please provide us with the feedback (Your can write upto 200 letters)  "
                    ></textarea>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onClick={() => {
                      event?.preventDefault();
                      const form = new FormData();
                      form.append("password", pswCheck);
                      form.append("withdrawFeedback", feedBack);

                      axios
                        .delete(`${apiURL}/users-info`, {
                          params: {
                            password: pswCheck,
                            withdrawFeedback: feedBack,
                          },
                        })
                        .then((res) => {
                          toast({
                            title: "Successfully deleted!",
                            description: "Thank you for giving up feedback",
                            status: "success",
                            position: "bottom",
                            isClosable: true,
                            duration: 2000,
                          });
                          removeCookies("accessToken", { path: "/" });
                          removeCookies("refreshToken", { path: "/" });
                          router.push("/");
                        })
                        .catch((err) => console.log(err));
                      onCheckClose();
                    }}
                    color={"white"}
                    backgroundColor={"blue"}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .modal-container {
            position: relative;
            margin-left: 45vh;
            width: 120vh;
            margin-top: 3vh;
          }
          .Profile-pic {
            border-radius: 50%;
          }
          .line {
            width: 500px;
            text-align: left;
            margin-left: 0px;
          }
          .feedback:focus {
            outline: none;
          }
          .feedback {
            width: 550px;
          }
        `}
      </style>
    </>
  );
}
