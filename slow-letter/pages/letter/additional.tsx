import { Steps, Step } from "../../components/steps";
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
import { UserDefaultIcon, UserReadOnlyIcon } from "../../components/icon/user-icon";
import CustomButton from "../../components/custom-button";

export default function Additional() {
  return (
    <>
      <Steps>
        <Step isActive isDone text="Write" />
        <Step isActive text="Additional" />
        <Step text="Send" processIdx={3} />
      </Steps>
      <div className="additional-container">
        <div className="additional-title-container">
          <span className="additional-title">Additional Info</span>
          <span className="additional-subtitle">
            Please enter addtional info
          </span>
        </div>
        <Grid
          w="95%"
          h="75%"
          top="5rem"
          left="1.5rem"
          position="absolute"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
                htmlFor="sender"
              >
                Sender
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  h={8}
                >
                  <UserReadOnlyIcon />
                </InputLeftElement>
                <Input
                  id="sender"
                  h={8}
                  placeholder="Email"
                  fontSize="0.8rem"
                  isReadOnly
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
                htmlFor="receiver"
              >
                Receiver
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  h={8}
                >
                  <UserDefaultIcon />
                </InputLeftElement>
                <Input
                  id="receiver"
                  h={8}
                  placeholder="Email"
                  fontSize="0.8rem"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
              >
                Departure / Country
              </FormLabel>
              <Select
                id="sender"
                w="100%"
                h={8}
                placeholder="Departure / Country"
                fontSize="0.8rem"
              >
                <option>US</option>
                <option>Korea</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
              >
                City
              </FormLabel>
              <Select
                id="sender"
                w="100%"
                h={8}
                placeholder="City"
                fontSize="0.8rem"
              ></Select>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
              >
                Arrival / Country
              </FormLabel>
              <Select
                id="sender"
                w="100%"
                h={8}
                placeholder="Arrival / Country"
                fontSize="0.8rem"
              ></Select>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
              >
                City
              </FormLabel>
              <Select
                id="sender"
                w="100%"
                h={8}
                placeholder="City"
                fontSize="0.8rem"
              ></Select>
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <FormControl isRequired>
              <FormLabel
                fontSize="0.8rem"
                fontWeight="Bold"
                marginLeft="0.5rem"
              >
                Transportation
              </FormLabel>
              <Select
                id="sender"
                w="100%"
                h={8}
                placeholder="Car / Flight / etc"
                fontSize="0.8rem"
              ></Select>
            </FormControl>
          </GridItem>
        </Grid>
      </div>
      <div className="button-container">
        <CustomButton className="button" text="Previous" />
        <CustomButton className="button" text="Next" />
      </div>
      <style jsx>
        {`
          .additional-container {
            width: 50rem;
            height: 25rem;
            background: rgba(255, 255, 255, 1);
            opacity: 1;
            position: absolute;
            top: 14rem;
            left: 15rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
          }
          .additional-title-container {
            width: 10rem;
            height: 3rem;
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
          }
          .additional-title {
            width: 10rem;
            color: rgba(26, 32, 44, 1);
            position: absolute;
            top: 0px;
            left: 0px;
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
          }
          .additional-subtitle {
            width: 10rem;
            color: rgba(144, 163, 191, 1);
            position: absolute;
            top: 1.8rem;
            left: 0px;
            font-family: Plus Jakarta Sans;
            font-weight: Medium;
            font-size: 0.7rem;
            text-align: left;
          }
          .button-container {
            position: absolute;
            width: 100%;
            bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 54rem;
          }
        `}
      </style>
    </>
  );
}