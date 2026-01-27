import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="h-screen">
        <div className="absolute inset-x-0 bottom-0 top-32 bg-gruv-bg bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-size-[120px_120px] mask-[radial-gradient(circle_at_50%_50%,black_0%,black_40%,transparent_65%),linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] mask-composite-intersect mask-repeat-no-repeat [mask-size:100%_100%,100%_100%,100%_100%]"></div>

        <div className="grid grid-cols-2 gap-2"></div>
      </div>
    </>
  );
};

export default AboutMe;
