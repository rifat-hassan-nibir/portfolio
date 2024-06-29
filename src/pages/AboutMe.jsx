import Gap from "../components/Gap";
import Description from "../components/utils/Description";
import SectionHeading from "../components/utils/SectionHeading";

const AboutMe = () => {
  return (
    <div className="py-10 lg:py-14">
      <SectionHeading text={"About Me"} />

      <Gap />

      <Description
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. "
        }
      />
    </div>
  );
};

export default AboutMe;
