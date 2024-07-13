import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import AnimationTitles from "./functions/AnimationTitles";

import logo01 from "/images/developers/logo-01.png";
import logo02 from "/images/developers/logo-02.png";
import logo03 from "/images/developers/logo-03.png";
import logo04 from "/images/developers/logo-04.png";
import logo05 from "/images/developers/logo-05.png";
import logo06 from "/images/developers/logo-06.png";
import logo07 from "/images/developers/logo-07.png";
import logo08 from "/images/developers/logo-08.png";
import logo09 from "/images/developers/logo-09.png";
import logo10 from "/images/developers/logo-10.png";
import logo11 from "/images/developers/logo-11.png";
import logo12 from "/images/developers/logo-12.png";
import logo13 from "/images/developers/logo-13.png";

function Developers() {
  return (
    <div className="developers mt-32 overflow-hidden">
      <div className="container mx-auto">
        <AnimationTitles
          title="Our the best developers"
          className="text-center mx-auto text-black text-4xl font-bold mb-8"
        />
        <p className="text-gray-400 text-center mb-12">
          The value of real estate can be affected by its utility, project, and
          demand.
        </p>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-hidden"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo01} alt="img" />
                <h6 className="text-black m-0">UA real house</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo02} alt="img" />
                <h6 className="text-black m-0">ERA Ukraine Real Estate</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo03} alt="img" />
                <h6 className="text-black m-0">Happy Neighbor</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo04} alt="img" />
                <h6 className="text-black m-0">American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo05} alt="img" />
                <h6 className="text-black m-0">Ukr Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo06} alt="img" />
                <h6 className="text-black m-0">UA real estate agency</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-hidden"
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              1298: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo07} alt="img" />
                <h6 className="text-black m-0">Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo08} alt="img" />
                <h6 className="text-black m-0">Dream House</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo09} alt="img" />
                <h6 className="text-black m-0">
                  Leading Real Estate Companies
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo10} alt="img" />
                <h6 className="text-black m-0">Home Partners of World</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo11} alt="img" />
                <h6 className="text-black m-0">Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo12} alt="img" />
                <h6 className="text-black m-0">American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center py-2 px-3 border border-gray-600 rounded-full">
                <img className="pr-3" src={logo13} alt="img" />
                <h6 className="text-black m-0">UA real estate agency</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Developers;
