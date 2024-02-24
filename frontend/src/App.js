
import { IconOutlineMail1 } from "../src/icons/IconOutlineMail1";
import { IconOutlinePhone1 } from "../src/icons/IconOutlinePhone1";
import { OriginalLogo } from "../src/components/OriginalLogo";
import { Button } from "../src/components/Button";

function App() {
  return (
    <>
      <div className="flex flex-col">


        {/* top bar */}

        <div className="w-screen px-[37px] py-[5px] top-0 bg-[#4c4c4c]">

          <div class="flex flex-wrap justify-center">

            <div className="basis-1/4 inline-flex items-center justify-center">
              <IconOutlinePhone1 className="" />
              <div className="text-white text-[16px] px-2">
                <a href="tel:+37498228414">+37498228414</a>
              </div>
            </div>
            <div className="basis-1/4 inline-flex items-center justify-center">
              <IconOutlineMail1 className="" />
              <div className="text-white text-[16px] px-2">
                yummy.food@gmail.com
              </div>
            </div>
            <div className=" basis-1/4 items-center justify-center flex">
              <a href="https://twitter.com/" target="_blank">
                <div className="relative text-white w-[27.17px] h-[27.17px] px- bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-rose-800">
                  <img
                    className="absolute w-[15px] h-[15px] top-[6px] left-[7px]"
                    alt="Logo twitter"
                    src="https://c.animaapp.com/nDFk6xrj/img/logo-twitter-2-1@2x.png"
                  />
                </div>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <div className=" relative text-white w-[27.17px] h-[27.17px] px-2 bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-rose-800">

                  <img
                    className="absolute w-[10px] h-[15px] top-[6px] left-[9px]"
                    alt="Logo fb simple"
                    src="https://c.animaapp.com/nDFk6xrj/img/logo-fb-simple-2-1@2x.png"
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <div className=" relative text-white w-[27.17px] h-[27.17px] px-2 bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-rose-800">
                  <img
                    className="absolute w-[16px] h-[15px] top-[6px] left-[5px]"
                    alt="Logo instagram"
                    src="https://c.animaapp.com/nDFk6xrj/img/logo-instagram-1-1@2x.png"
                  />
                </div>
              </a>
              <a href="https://github.com/" target="_blank">
                <div className=" relative text-white w-[27.17px] h-[27.17px] px-2 bg-[#f8f8f61f] rounded-[13.59px] mx-1 hover:bg-rose-800">
                  <img
                    className="absolute w-[15px] h-[15px] top-[6px] left-[5px]"
                    alt="Logo github"
                    src="https://c.animaapp.com/nDFk6xrj/img/logo-github-1-1@2x.png"
                  />
                </div>
              </a>
            </div>

          </div >


        </div >

        {/* topbar */}

        {/* menu */}

        <div className="w-screen px-[50px] py-[17px] left-0 bg-[#f1f1f1]">

          <div className="flex flex-wrap justify-center lg:justify-start">

            {/* logo */}
            <div className="hidden basis-1/2 lg:flex items-center w-[400px] justify-start px-[100px]">
              <img
                className="w-[56px] h-[30px]"
                alt="Japanese food"
                src="https://c.animaapp.com/nDFk6xrj/img/japanese-food-1.svg"
              />
              <OriginalLogo
                className="!ml-[-25px] !h-[30px] !w-[182.67px]"
                divClassName="!text-[#474747] !tracking-[-0.40px] !text-[30px] !left-[15px] !leading-[29.3px] !top-[3px]"
                hasHotFood={false}
                text="Yummy Food"
                type="main"
              />
            </div>

            {/* menu */}
            <div className="basis-1/2 justify-center inline-flex items-center">
              <div className="px-2 h-[30px] w-[60px] bg-[#dbdfd0] rounded-[34px]">
                <div className="mt-[2px]">
                  Home
                </div>
              </div>
              <div className="px-2  h-[30px] w-[60px]">
                <div className="mt-[2px] text-center">
                  Menu
                </div>
              </div>
              <div className="px-2  h-[30px] w-[60px]">
                <div className="mt-[2px] text-center">
                  Blog
                </div>
              </div>
              <div className="px-2  h-[30px] w-[60px]">
                <div className="mt-[2px] text-center">
                  About
                </div>
              </div>
              <div className="px-2  h-[30px] w-[60px]">
                <div className="mt-[2px] text-center">
                  Contact
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* menu */}

      </div>
    </>
  );
}

export default App;
