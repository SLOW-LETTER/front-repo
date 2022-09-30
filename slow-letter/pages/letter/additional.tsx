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
import CustomButton from "../../components/custom-button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useStore } from "../../components/zustand_hooks/store";
import {
  AdditionalFormLabelProps,
  AdditionalFormSelectProps,
} from "../../components/type/type";

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
  options?.unshift("Select Your Option");
  return (
    <Select
      className="select"
      id={id}
      h={INPUT_HEIGHT}
      fontSize={FONT_SIZE}
      onChange={(event) => onSetState(event.target.value)}
      cursor="pointer"
    >
      {options?.map((item, key) =>
        item === "Select Your Option" ? (
          <option key={key} value="" disabled selected>
            {item}
          </option>
        ) : (
          <option key={key} value={item}>
            {item}
          </option>
        )
      )}
    </Select>
  );
}

export default function Additional() {
  const router = useRouter();

  const [receiver, setReceiver] = useState("");
  const [departCountry, setDepartCountry] = useState("");
  const [departCity, setDepartCity] = useState("");
  const [arriveCountry, setArriveCountry] = useState("");
  const [arriveCity, setArriveCity] = useState("");
  const [transportation, setTransportation] = useState("");

  const saveAdditional = useStore((state: any) => state.saveAdditional);

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
                      fontSize={FONT_SIZE}
                      isReadOnly
                    />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Receiver" />
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
                    options={["New York", "Seoul"]}
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
                    options={["New York", "Seoul"]}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={2}>
                <FormControl isRequired>
                  <AdditionalFormLabel name="Transportation" />
                  <AdditionalFormSelect
                    onSetState={setTransportation}
                    options={["Flight", "Car", "Walk"]}
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
