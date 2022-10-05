import ProgressBar from "../../components/progressbar/progressbar";
import ProgressBarItem from "../../components/progressbar/progressbar-item";
import {
  InputGroup,
  Input,
  InputLeftElement,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import {
  UserDefaultIcon,
  UserReadOnlyIcon,
} from "../../components/icon/user-icon";
import CustomButton from "../../components/button/custom-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AdditionalFormLabelProps,
  AdditionalFormSelectProps,
} from "../../components/type/type";
import { useStore } from "../../components/zustand_stores/store";
import axios from "axios";
import { apiURL } from "../../components/apiURL";

const FONT_SIZE = "0.8rem";
const INPUT_WIDTH = "15rem";
const INPUT_HEIGHT = 8;

function AdditionalFormLabel({ name }: AdditionalFormLabelProps) {
  return (
    <FormLabel fontSize={FONT_SIZE} fontWeight="Bold" marginLeft="0.5rem">
      {name}
    </FormLabel>
  );
}

function AdditionalFormSelect({
  id,
  placeHolder,
  onSetState,
  options,
}: AdditionalFormSelectProps) {
  return (
    <Select
      className="select"
      id={id}
      h={INPUT_HEIGHT}
      fontSize={FONT_SIZE}
      onChange={(event) => onSetState(event.target.value)}
      cursor="pointer"
      placeholder="Select Your Option"
    >
      {options?.map((item, key) => (
        <option key={key} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}

export default function Additional() {
  const router = useRouter();

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [departCountry, setDepartCountry] = useState("");
  const [departCity, setDepartCity] = useState("");
  const [arriveCountry, setArriveCountry] = useState("");
  const [arriveCity, setArriveCity] = useState("");
  const [transportation, setTransportation] = useState("");

  const saveAdditional = useStore((state: any) => state.saveAdditional);

  useEffect(() => {
    axios
      .get(`${apiURL}/users-info`)
      .then((res) => setSender(res.data.payload.username))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="additional-page-container w-full h-full flex flex-col items-center justify-center">
        <ProgressBar>
          <ProgressBarItem isActive isDone text="Write" />
          <ProgressBarItem isActive text="Additional" />
          <ProgressBarItem text="Send" processIdx={3} />
        </ProgressBar>
        <div className="additional-container">
          <div className="additional-title-container">
            <span className="additional-title">Additional Info</span>
            <span className="additional-subtitle">
              Please enter addtional info
            </span>
          </div>
          <form id="additional-form">
            <Grid
              w="fit-content"
              h="fit-content"
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={4}
              marginLeft="1rem"
              marginRight="1rem"
              marginBottom="1rem"
            >
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Sender" />
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      h={INPUT_HEIGHT}
                    >
                      <UserReadOnlyIcon />
                    </InputLeftElement>
                    <Input
                      id="sender"
                      w={INPUT_WIDTH}
                      h={INPUT_HEIGHT}
                      placeholder="Email"
                      value={sender}
                      fontSize={FONT_SIZE}
                      isReadOnly
                    />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Receiver"/>
                  <div className="email-check-button-container">
                    <button
                      type="button"
                      onClick={() =>{
                        const form = new FormData();
                        form.append("email", receiver)
                        axios
                          .post(`${apiURL}/users/email/validation`, form)
                          .then((res) => {
                            if (res.data.payload.validation) {
                              setReceiver("");
                              alert("No user existed")
                            } else {
                              alert("Find User")
                            }
                          })
                          .catch((err) => {
                            setReceiver("");
                            console.log(err);
                          })}
                      }
                    >
                      Check
                    </button>
                  </div>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      h={INPUT_HEIGHT}
                    >
                      <UserDefaultIcon />
                    </InputLeftElement>
                    <Input
                      id="receiver"
                      w={INPUT_WIDTH}
                      h={INPUT_HEIGHT}
                      placeholder="Email"
                      fontSize={FONT_SIZE}
                      value={receiver}
                      onChange={(event) => setReceiver(event.target.value)}
                    />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Departure / Country" />
                  <AdditionalFormSelect
                    onSetState={setDepartCountry}
                    options={["US", "Korea"]}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="City" />
                  <AdditionalFormSelect
                    onSetState={setDepartCity}
                    options={departCountry === "US" ? ["New York"] : ["Seoul"]}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Arrival / Country" />
                  <AdditionalFormSelect
                    onSetState={setArriveCountry}
                    options={["US", "Korea"]}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="City" />
                  <AdditionalFormSelect
                    onSetState={setArriveCity}
                    options={arriveCountry === "US" ? ["New York"] : ["Seoul"]}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={2}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Transportation" />
                  <AdditionalFormSelect
                    onSetState={setTransportation}
                    options={["flight", "car", "walk"]}
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </form>
        </div>
        <div className="button-container">
          <div className="button-left-container">
            <CustomButton
              className="button"
              text="Previous"
              onClick={() => router.push("/letter/template")}
            />
          </div>
          <div className="button-right-container">
            <CustomButton
              className="button"
              text="Next"
              onClick={(event) => {
                event.preventDefault();
                saveAdditional(
                  sender,
                  receiver,
                  departCountry,
                  departCity,
                  arriveCountry,
                  arriveCity,
                  transportation
                );
                router.push("/letter/sending");
              }}
              form="additional-form"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .additional-container {
            width: fit-content;
            height: fit-content;
            background: rgba(255, 255, 255, 1);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .additional-title-container {
            width: fit-content;
            height: fit-content;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
          }
          .additional-title {
            width: fit-content;
            color: rgba(26, 32, 44, 1);
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
          }
          .additional-subtitle {
            width: fit-content;
            color: rgba(144, 163, 191, 1);
            font-family: Plus Jakarta Sans;
            font-weight: Medium;
            font-size: 0.7rem;
            text-align: left;
          }
          .email-check-button-container {
            width: fit-content;
            height: fit-content;
            position: absolute;
            top: 0;
            right: 0;
            font-size: 12.8px;
            background: #2563eb;
            color: white;
            padding: 0.2rem;
            border-radius: 10px;
          }
          .button-container {
            width: 100%;
            height: 4rem;
            display: flex;
            align-items: center;
          }
          .button-container .button-left-container {
            position: absolute;
            left: 2rem;
          }
          .button-container .button-right-container {
            position: absolute;
            right: 2rem;
          }
        `}
      </style>
    </>
  );
}
