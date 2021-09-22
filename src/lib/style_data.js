import styled from 'styled-components';

const Wrap = styled.div`
  margin: 3% auto;
  width: 100%;
  .slick-prev:before {
    color: gray; // 버튼 색은 검은색으로
    font-size: 50px;
  }
  .slick-prev {
    z-index: 9999;
    left: -55px;
  }
  .slick-next:before {
    color: gray; // 버튼 색은 검은색으로
    font-size: 50px;
  }
  .slick-next {
    z-index: 9999;
    right: -10px;
  }
  h2 {
    color: white;
    margin-bottom: 10px;
  }
`;

const Main_Wrap = styled.div`
  margin: 0 auto;
  width: 1300px;
  padding-top: 30px;
  h2 {
    margin-bottom: 5px;
  }
  .slick-list {
    width: 1300px;
    margin-left: 0;
  }
  .slick-dots {
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
  .slick-dots button:before {
    color: white;
  }
`;

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const settings_main = {
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export { Wrap, Main_Wrap, settings, settings_main };
