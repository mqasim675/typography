import { Typography } from "../components/Typography/Typography";
export default function Home() {
  return (
    <>
      <div>
        <Typography
          variant="displayXl"
          color="Gray1"
          fw="exbold"
          as="h1"
          center
        >
          Heading 1
        </Typography>
        <Typography variant="displayLg" color="Gray1" fw="bold" as="h2" center>
          Heading 2
        </Typography>
        <Typography variant="displayMd" color="Gray1" fw="bold" as="h3" center>
          Heading 3
        </Typography>
        <Typography variant="displaySm" color="Gray1" fw="bold" as="h4" center>
          Heading 4
        </Typography>
        <Typography variant="displayXs" color="Gray1" fw="bold" as="h5" center>
          Heading 5
        </Typography>
        <Typography variant="displayXxs" color="Gray1" fw="bold" as="h6" center>
          Heading 6
        </Typography>
        {/* textXl */}
        <Typography variant="textXl" color="Gray1" fw="bold" as="p" center>
          Large Text Bold
        </Typography>
        <Typography variant="textXl" color="Gray1" fw="regular" as="p" center>
          Large Text Regular
        </Typography>
        {/* textLg */}
        <Typography variant="textLg" color="Gray1" fw="bold" as="p" center>
          Medium Text Bold
        </Typography>
        <Typography variant="textLg" color="Gray1" fw="regular" as="p" center>
          Medium Text Regular
        </Typography>
        {/* textMd */}
        <Typography variant="textMd" color="Gray1" fw="bold" as="p" center>
          Normal Text Bold
        </Typography>
        <Typography
          variant="displayXxs"
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
        <Typography center>Default Text</Typography>
        <Typography color="White" center>
          Primary Text
        </Typography>
        <Typography color="Primary" center>
          Primary color
        </Typography>
        <Typography color="Primary-text" center>
          Primary Text
        </Typography>
        <Typography color="Secondary" center>
          secondary Text
        </Typography>
        <Typography color="Secondary-text" center>
          secondary Text
        </Typography>
        <Typography color="Gray1" center>
          Gray1 Text
        </Typography>
        <Typography color="Gray2" center>
          Gray2 Text
        </Typography>
        <Typography color="Gray3" center>
          Gray3 Text
        </Typography>
        <Typography color="Gray4" center>
          Gray4 Text
        </Typography>
        <Typography color="Gray5" center>
          Gray5 Text
        </Typography>
        <Typography color="Gray6" center>
          Gray6 Text
        </Typography>
        <Typography variant="displayXl">OK Text</Typography>
      </div>
    </>
  );
}
