"use client";

import { Typography } from "../components/Typography/Typography";

import { Button } from "@/components/Button/Button";

import { DropDown } from "@/components/DropDown/DropDown";

import { NDropDown } from "@/components/NDropDown/NDropDown";

import { TagButton } from "@/components/Tag";

import { Option2 } from "@/app/interface";

import { useState } from "react";

import { Option } from "@/components/DropDown/DropDownOption";

// import { ApiData } from "@/components/API/sample";

import MyComponent from "@/components/API/linkedin";
export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Option2 | null>(null);
  console.log(selectedItem);
  const options: Option2[] = [
    {
      lable: "ali",
      value: "ali",
    },
    {
      lable: "ali2",
      value: "ali2",
    },
    {
      lable: "ali3",
      value: "ali3",
    },
    {
      lable: "ali4",
      value: "ali4",
    },
  ];

  return (
    <>
      <div>
        {/* Typography heading & paragraph */}

        {/* h1 */}
        <div>
          <Typography
            variant="heading1"
            color="Gray1"
            fw="extraBold"
            as="h1"
            center
          >
            Heading 1
          </Typography>

          {/* h2 */}

          <Typography variant="heading2" color="Gray1" fw="bold" as="h2" center>
            Heading 2
          </Typography>

          {/* h3 */}

          <Typography variant="heading3" color="Gray1" fw="bold" as="h3" center>
            Heading 3
          </Typography>

          {/* h4 */}

          <Typography variant="heading4" color="Gray1" fw="bold" as="h4" center>
            Heading 4
          </Typography>

          {/* h5 */}

          <Typography variant="heading5" color="Gray1" fw="bold" as="h5" center>
            Heading 5
          </Typography>

          {/* h6 */}

          <Typography variant="heading6" color="Gray1" fw="bold" as="h6" center>
            Heading 6
          </Typography>

          {/* textLg */}

          <Typography variant="textLg" color="Gray1" fw="bold" as="p" center>
            Large Text Bold
          </Typography>
          <Typography variant="textLg" color="Gray1" fw="regular" as="p" center>
            Large Text Regular
          </Typography>

          {/* textMd */}

          <Typography variant="textMd" color="Gray1" fw="bold" as="p" center>
            Medium Text Bold
          </Typography>
          <Typography variant="textMd" color="Gray1" fw="regular" as="p" center>
            Medium Text Regular
          </Typography>

          {/* textNorm */}

          <Typography variant="textNorm" color="Gray1" fw="bold" as="p" center>
            Normal Text Bold
          </Typography>
          <Typography
            variant="textNorm"
            color="Gray1"
            fw="regular"
            as="p"
            center
          >
            Normal Text Regular
          </Typography>

          {/* textSm */}

          <Typography variant="textSm" color="Gray1" fw="bold" as="p" center>
            Small Text Bold
          </Typography>
          <Typography variant="textSm" color="Gray1" fw="regular" as="p" center>
            Small Text Regular
          </Typography>

          {/* textXs */}

          <Typography variant="textXs" color="Gray1" fw="bold" as="p" center>
            Small Text Bold
          </Typography>
          <Typography variant="textXs" color="Gray1" fw="regular" as="p" center>
            Small Text Regular
          </Typography>

          {/* Default Text */}

          <Typography center>Default Text</Typography>

          {/* Primary Text */}

          <Typography color="White" center>
            Primary Text
          </Typography>

          {/* Primary color */}

          <Typography color="Primary" center>
            Primary color
          </Typography>

          {/* Primary Text */}

          <Typography color="Primary-text" center>
            Primary Text
          </Typography>

          {/* secondary Text */}

          <Typography color="Secondary" center>
            secondary Text
          </Typography>

          {/* secondary Text */}

          <Typography color="Secondary-text" center>
            secondary Text
          </Typography>

          {/* Gray1 Text */}

          <Typography color="Gray1" center>
            Gray1 Text
          </Typography>

          {/* Gray2 Text */}

          <Typography color="Gray2" center>
            Gray2 Text
          </Typography>

          {/* Gray3 Text */}

          <Typography color="Gray3" center>
            Gray3 Text
          </Typography>

          {/* Gray4 Text */}

          <Typography color="Gray4" center>
            Gray4 Text
          </Typography>

          {/* Gray5 Text */}

          <Typography color="Gray5" center>
            Gray5 Text
          </Typography>

          {/* Gray6 Text */}

          <Typography color="Gray6" center>
            Gray6 Text
          </Typography>

          {/* OK Text */}

          <Typography variant="heading1">OK Text</Typography>
        </div>
        {/* button primary */}
        <div>
          <Button variant="Contained" size="Lg" color="White" bgColor="Primary">
            Button
          </Button>

          {/* button disabled */}

          <Button size="Lg" color="Dark5" bgColor="Disable1" disabled>
            Button
          </Button>

          {/* button outline */}

          <Button size="Lg" variant="Outlined">
            Button
          </Button>

          {/* button contained secondary */}

          <Button
            size="Lg"
            variant="Contained"
            bgColor="Secondary"
            color="White"
          >
            Button
          </Button>

          {/* button outline secondary */}

          <Button
            size="Lg"
            variant="Outlined"
            bgColor="Secondary"
            color="Secondary"
          >
            Button
          </Button>

          {/* button contained tertiary */}

          <Button
            size="Lg"
            variant="Contained"
            bgColor="Tertiary"
            color="White"
          >
            Button
          </Button>

          {/* button outline tertiary */}

          <Button
            size="Lg"
            variant="Outlined"
            bgColor="Tertiary"
            color="Tertiary"
          >
            Button
          </Button>
          <br />

          {/* md primary */}

          <Button variant="Contained" size="Md" color="White" bgColor="Primary">
            Button
          </Button>

          {/* md disabled */}

          <Button size="Md" color="Dark5" bgColor="Disable1" disabled>
            Button
          </Button>

          {/* md outline */}

          <Button size="Md" variant="Outlined">
            Button
          </Button>

          {/* md contained secondary */}

          <Button
            size="Md"
            variant="Contained"
            bgColor="Secondary"
            color="White"
          >
            Button
          </Button>

          {/* md outline secondary */}

          <Button
            size="Md"
            variant="Outlined"
            bgColor="Secondary"
            color="Secondary"
          >
            Button
          </Button>

          {/* md contained tertiary */}

          <Button
            size="Md"
            variant="Contained"
            bgColor="Tertiary"
            color="White"
          >
            Button
          </Button>

          {/* md outline tertiary */}

          <Button
            size="Md"
            variant="Outlined"
            bgColor="Tertiary"
            color="Tertiary"
          >
            Button
          </Button>
          <br />

          {/* sm primary */}

          <Button variant="Contained" size="Sm" color="White" bgColor="Primary">
            Button
          </Button>

          {/* sm disabled */}

          <Button size="Sm" color="Dark5" bgColor="Disable1" disabled>
            Button
          </Button>

          {/* sm outline */}

          <Button size="Sm" variant="Outlined">
            Button
          </Button>

          {/* sm contained secondary */}

          <Button
            size="Sm"
            variant="Contained"
            bgColor="Secondary"
            color="White"
          >
            Button
          </Button>

          {/* sm outline secondary */}

          <Button
            size="Sm"
            variant="Outlined"
            bgColor="Secondary"
            color="Secondary"
          >
            Button
          </Button>

          {/* sm contained tertiary */}

          <Button
            size="Sm"
            variant="Contained"
            bgColor="Tertiary"
            color="White"
          >
            Button
          </Button>

          {/* sm outline tertiary */}

          <Button
            size="Sm"
            variant="Outlined"
            bgColor="Tertiary"
            color="Tertiary"
          >
            Button
          </Button>
          <br />
        </div>
        {/* Tag button */}

        <div className="">
          {/* <TagButton size="Lg">Tag</TagButton> */}
          <div className="flex flex-col">
            <div className="my-4">
              <TagButton
                bgColor="Primary"
                color="White"
                size="Md"
                className="rounded-[40px] cursor-pointer"
              >
                Tag
              </TagButton>
            </div>
            <div>
              <TagButton
                bgColor="Secondary"
                color="White"
                size="Md"
                className="rounded-[40px] cursor-pointer"
              >
                Tag
              </TagButton>
            </div>
            <div className="my-4">
              <TagButton
                bgColor="Secondary-text"
                color="White"
                size="Md"
                className="rounded-[40px] cursor-pointer"
              >
                Tag
              </TagButton>
            </div>
            <div>
              <TagButton
                bgColor="Secondary-text"
                color="White"
                size="Lg"
                className="rounded-[30px] cursor-pointer"
              >
                Tag
              </TagButton>
            </div>
          </div>
          <br />
        </div>
        <div className="flex container">
          <Button
            size="Xm"
            variant="Outlined"
            bgColor="White"
            color="Gray5"
            rounded="Md"
          >
            About
          </Button>
          <Button
            size="Xm"
            variant="Container"
            bgColor="White"
            color="Secondary-text"
          >
            Profile
          </Button>
          <Button
            size="Xm"
            variant="Container"
            bgColor="White"
            color="Secondary-text"
          >
            Team
          </Button>
          <Button
            size="Xm"
            variant="Container"
            bgColor="White"
            color="Secondary-text"
            rounded="Md1"
          >
            Services
          </Button>
        </div>
        {/* Drop Down */}
        <div>
          <DropDown
            className="text-base mb-4"
            variant="Md"
            color="Primary"
            bgColor="Primary-text"
            label="test"
          ></DropDown>
        </div>
        <div>
          <NDropDown
            placeholder="Team"
            options={options}
            onChange={(selection: Option2) => setSelectedItem(selection)}
            selected={selectedItem}
          />
        </div>
        <div>{/* <ApiData /> */}</div>
        <>
          <MyComponent />
        </>
      </div>
    </>
  );
}
