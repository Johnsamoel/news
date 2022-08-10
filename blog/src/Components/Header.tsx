import { Box , Stack} from "@mui/system";

//importing my components
import Text from "./UI/Text";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(http://jevelin.shufflehound.com/personal-blog/wp-content/uploads/sites/28/2019/09/bg-par2.jpg?id=277)`,
        height: "100vh",
        maxWidth: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxSizing:'border-box',
        backgroundAttachment:'fixed',
        backgroundPosition:'center center',
        position:'relative',
      }}
    >

      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
    <Text />
      </Stack>
    </Box>
  );
};

export default Header;
