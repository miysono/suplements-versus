//Margin
//NONE: 0
//SM : 10
//MD : 20
//LG : 30
//XL : 40

//PADDING
//NONE: 0 - default
//SM: 10;
//MD:20;
//LG:30;
//XL:40;

//TEXTCOLOR
//Primary - default
//Secondary

const SectionBody = ({
  marginSm,
  marginMd,
  marginLg,
  marginXl,
  paddingSm,
  paddingMd,
  paddingLg,
  paddingXl,
  textPrimary,
  textSecondary,
  bgPrimary,
  bgSecondary,
  children,
}) => {
  return (
    <section
      className={`${marginSm && "mt-10"} ${marginMd && "mt-20"} ${
        marginLg && "mt-30"
      } ${marginXl && "mt-40"} ${paddingSm && "py-10"} ${
        paddingMd && "py-20"
      } ${paddingLg && "py-30"} ${paddingXl && "py-40"} ${
        textPrimary && "text-green-600"
      } ${textSecondary && "text-teal-700"} ${bgPrimary && "bg-green-100"} ${
        bgSecondary && "bg-teal-100"
      } container`}
    >
      {children}
    </section>
  );
};

export default SectionBody;
