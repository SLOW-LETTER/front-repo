import Sidebar from "../../components/sidebar";
import SettingItems from "../../components/setting-Items";
import SettingModal from "../../components/setting-modal";
import Image from "next/image";
import { MouseEvent, useState } from "react";
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
  ChakraProvider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

interface MySettings {
  Profile: string;
}

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

  const [profile, setProfile] = useState("/defaultProfile.svg");
  function eventread(e: React.MouseEvent<HTMLElement>) {
    const files = (e.target as HTMLInputElement).files;
    console.log(files);
  }
  //setProfile((profile = document.getElementById("Profile_pics")));
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
              onClick={(event) => eventread(event)}
            />
          </div>
          <hr className="line mt-10" />
          <div className="email flex flex-row py-8 ">
            <text className="flex text-black fixed-email justify-between">
              Email
            </text>
            <text className="flex text-black fixed-email">example@example</text>
          </div>

          <hr className="line" />

          <SettingItems
            ID="Editphone"
            Hint="000-0000-0000"
            Label="Phone"
            Types="number"
          />
          <hr className="line" />

          <SettingItems
            ID="Editbio"
            Hint="Place introduce yourself"
            Label="Your Bio"
            Types="string"
          />
        </div>
        <div className="btn-container flex flex-row justify-end p-4 space-x-8">
          <Stack direction="row" spacing={4} align="end">
            <Button
              onClick={onSaveOpen}
              colorScheme="blue"
              background="blue"
              variant={"solid"}
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
                      }}
                      colorScheme="blue"
                      background="blue"
                    >
                      Save
                    </Button>
                    <Button onClick={onSaveClose}>Cancel</Button>
                  </Stack>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button
              onClick={onCancelOpen}
              colorScheme="red"
              background-color="red"
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
              <ModalContent>
                <ModalHeader>
                  Do you really want to cancel all the changes?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  If you do not save, you will lose all the changes
                </ModalBody>
                <ModalFooter>
                  <Stack direction="row" spacing={4}>
                    <Button
                      onClick={onCancelClose}
                      colorScheme="blue"
                      background="blue"
                    >
                      Save
                    </Button>
                    <Button onClick={onCancelClose}>Cancel</Button>
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
          background-image: url(${profile});
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
          bottom:-550px;
        }
        .email{
          position:relative;
          left:-8em;
        }
      `}
      </style>
    </>
  );
}
