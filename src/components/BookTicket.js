import React, { useState } from "react";
import Navigation from "./Navbar";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ChairOutlined from "@mui/icons-material/ChairOutlined";

const BookTicket = () => {
  const [seatSelected, setSeatSelected] = useState([]);
  const location = useLocation();
  const state = location.state;
  const { theaterName, movieName, price, seats, bookedSeats } = state;

  const seatClickedHandler = (n) => {
    if (bookedSeats.includes(n)) {
      console.log("it already booked");
      return;
    }
    if (seatSelected.includes(n)) {
      let selected = seatSelected.filter((seat) => seat !== n);
      setSeatSelected(selected);
    } else {
      let selected = [...seatSelected];
      selected.push(n);
      setSeatSelected(selected);
    }
  };
  return (
    <>
      <Navigation />
      <Container>
        <div className='bookingMovieHeading'>
          <h2>{theaterName}</h2>
          <h3>{movieName}</h3>
          <p>{`Price per ticket -${price} Rs`}</p>
        </div>

        <div className='seats firstRow'>
          1
          <ChairOutlined
            onClick={() => seatClickedHandler(1)}
            color={
              bookedSeats.includes(1)
                ? "success"
                : seatSelected.includes(1)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          2
          <ChairOutlined
            onClick={() => seatClickedHandler(2)}
            color={
              bookedSeats.includes(2)
                ? "success"
                : seatSelected.includes(2)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          3
          <ChairOutlined
            color={bookedSeats.includes(3) ? "success" : "disabled"}
            fontSize='large'
          />
          4
          <ChairOutlined
            color={bookedSeats.includes(4) ? "success" : "disabled"}
            fontSize='large'
          />
          5
          <ChairOutlined
            color={bookedSeats.includes(5) ? "success" : "disabled"}
            fontSize='large'
          />
          6
          <ChairOutlined
            color={bookedSeats.includes(6) ? "success" : "disabled"}
            fontSize='large'
          />
          7
          <ChairOutlined
            color={bookedSeats.includes(7) ? "success" : "disabled"}
            fontSize='large'
          />
          8
          <ChairOutlined
            color={bookedSeats.includes(8) ? "success" : "disabled"}
            fontSize='large'
          />
          9
          <ChairOutlined
            color={bookedSeats.includes(9) ? "success" : "disabled"}
            fontSize='large'
          />
          10
          <ChairOutlined
            color={bookedSeats.includes(10) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats secondRow'>
          11
          <ChairOutlined
            color={bookedSeats.includes(11) ? "success" : "disabled"}
            fontSize='large'
          />
          12
          <ChairOutlined
            color={bookedSeats.includes(12) ? "success" : "disabled"}
            fontSize='large'
          />
          13
          <ChairOutlined
            color={bookedSeats.includes(13) ? "success" : "disabled"}
            fontSize='large'
          />
          14
          <ChairOutlined
            color={bookedSeats.includes(14) ? "success" : "disabled"}
            fontSize='large'
          />
          15
          <ChairOutlined
            color={bookedSeats.includes(15) ? "success" : "disabled"}
            fontSize='large'
          />
          16
          <ChairOutlined
            color={bookedSeats.includes(16) ? "success" : "disabled"}
            fontSize='large'
          />
          17
          <ChairOutlined
            color={bookedSeats.includes(17) ? "success" : "disabled"}
            fontSize='large'
          />
          18
          <ChairOutlined
            color={bookedSeats.includes(18) ? "success" : "disabled"}
            fontSize='large'
          />
          19
          <ChairOutlined
            color={bookedSeats.includes(19) ? "success" : "disabled"}
            fontSize='large'
          />
          20
          <ChairOutlined
            color={bookedSeats.includes(20) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats thirdRow'>
          21
          <ChairOutlined
            color={bookedSeats.includes(21) ? "success" : "disabled"}
            fontSize='large'
          />
          22
          <ChairOutlined
            color={bookedSeats.includes(22) ? "success" : "disabled"}
            fontSize='large'
          />
          23
          <ChairOutlined
            color={bookedSeats.includes(23) ? "success" : "disabled"}
            fontSize='large'
          />
          24
          <ChairOutlined
            color={bookedSeats.includes(24) ? "success" : "disabled"}
            fontSize='large'
          />
          25
          <ChairOutlined
            color={bookedSeats.includes(25) ? "success" : "disabled"}
            fontSize='large'
          />
          26
          <ChairOutlined
            color={bookedSeats.includes(26) ? "success" : "disabled"}
            fontSize='large'
          />
          27
          <ChairOutlined
            color={bookedSeats.includes(27) ? "success" : "disabled"}
            fontSize='large'
          />
          28
          <ChairOutlined
            color={bookedSeats.includes(28) ? "success" : "disabled"}
            fontSize='large'
          />
          29
          <ChairOutlined
            color={bookedSeats.includes(29) ? "success" : "disabled"}
            fontSize='large'
          />
          30
          <ChairOutlined
            color={bookedSeats.includes(30) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats fourRow'>
          31
          <ChairOutlined
            color={bookedSeats.includes(31) ? "success" : "disabled"}
            fontSize='large'
          />
          32
          <ChairOutlined
            color={bookedSeats.includes(32) ? "success" : "disabled"}
            fontSize='large'
          />
          33
          <ChairOutlined
            color={bookedSeats.includes(33) ? "success" : "disabled"}
            fontSize='large'
          />
          34
          <ChairOutlined
            color={bookedSeats.includes(34) ? "success" : "disabled"}
            fontSize='large'
          />
          35
          <ChairOutlined
            color={bookedSeats.includes(35) ? "success" : "disabled"}
            fontSize='large'
          />
          36
          <ChairOutlined
            color={bookedSeats.includes(36) ? "success" : "disabled"}
            fontSize='large'
          />
          37
          <ChairOutlined
            color={bookedSeats.includes(37) ? "success" : "disabled"}
            fontSize='large'
          />
          38
          <ChairOutlined
            color={bookedSeats.includes(38) ? "success" : "disabled"}
            fontSize='large'
          />
          39
          <ChairOutlined
            color={bookedSeats.includes(39) ? "success" : "disabled"}
            fontSize='large'
          />
          40
          <ChairOutlined
            color={bookedSeats.includes(40) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats fifthRow'>
          41
          <ChairOutlined
            color={bookedSeats.includes(41) ? "success" : "disabled"}
            fontSize='large'
          />
          42
          <ChairOutlined
            color={bookedSeats.includes(42) ? "success" : "disabled"}
            fontSize='large'
          />
          43
          <ChairOutlined
            color={bookedSeats.includes(43) ? "success" : "disabled"}
            fontSize='large'
          />
          44
          <ChairOutlined
            color={bookedSeats.includes(44) ? "success" : "disabled"}
            fontSize='large'
          />
          45
          <ChairOutlined
            color={bookedSeats.includes(45) ? "success" : "disabled"}
            fontSize='large'
          />
          46
          <ChairOutlined
            color={bookedSeats.includes(46) ? "success" : "disabled"}
            fontSize='large'
          />
          47
          <ChairOutlined
            color={bookedSeats.includes(47) ? "success" : "disabled"}
            fontSize='large'
          />
          48
          <ChairOutlined
            color={bookedSeats.includes(48) ? "success" : "disabled"}
            fontSize='large'
          />
          49
          <ChairOutlined
            color={bookedSeats.includes(49) ? "success" : "disabled"}
            fontSize='large'
          />
          50
          <ChairOutlined
            color={bookedSeats.includes(50) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats sixthRow'>
          51
          <ChairOutlined
            color={bookedSeats.includes(51) ? "success" : "disabled"}
            fontSize='large'
          />
          52
          <ChairOutlined
            color={bookedSeats.includes(52) ? "success" : "disabled"}
            fontSize='large'
          />
          53
          <ChairOutlined
            color={bookedSeats.includes(53) ? "success" : "disabled"}
            fontSize='large'
          />
          54
          <ChairOutlined
            color={bookedSeats.includes(54) ? "success" : "disabled"}
            fontSize='large'
          />
          55
          <ChairOutlined
            color={bookedSeats.includes(55) ? "success" : "disabled"}
            fontSize='large'
          />
          56
          <ChairOutlined
            color={bookedSeats.includes(56) ? "success" : "disabled"}
            fontSize='large'
          />
          57
          <ChairOutlined
            color={bookedSeats.includes(57) ? "success" : "disabled"}
            fontSize='large'
          />
          58
          <ChairOutlined
            color={bookedSeats.includes(58) ? "success" : "disabled"}
            fontSize='large'
          />
          59
          <ChairOutlined
            color={bookedSeats.includes(59) ? "success" : "disabled"}
            fontSize='large'
          />
          60
          <ChairOutlined
            color={bookedSeats.includes(60) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats seventhRow'>
          61
          <ChairOutlined
            color={bookedSeats.includes(61) ? "success" : "disabled"}
            fontSize='large'
          />
          62
          <ChairOutlined
            color={bookedSeats.includes(62) ? "success" : "disabled"}
            fontSize='large'
          />
          63
          <ChairOutlined
            color={bookedSeats.includes(63) ? "success" : "disabled"}
            fontSize='large'
          />
          64
          <ChairOutlined
            color={bookedSeats.includes(64) ? "success" : "disabled"}
            fontSize='large'
          />
          65
          <ChairOutlined
            color={bookedSeats.includes(65) ? "success" : "disabled"}
            fontSize='large'
          />
          66
          <ChairOutlined
            color={bookedSeats.includes(66) ? "success" : "disabled"}
            fontSize='large'
          />
          67
          <ChairOutlined
            color={bookedSeats.includes(67) ? "success" : "disabled"}
            fontSize='large'
          />
          68
          <ChairOutlined
            color={bookedSeats.includes(16) ? "success" : "disabled"}
            fontSize='large'
          />
          69
          <ChairOutlined
            color={bookedSeats.includes(69) ? "success" : "disabled"}
            fontSize='large'
          />
          70
          <ChairOutlined
            color={bookedSeats.includes(70) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats eightRow'>
          71
          <ChairOutlined
            color={bookedSeats.includes(71) ? "success" : "disabled"}
            fontSize='large'
          />
          72
          <ChairOutlined
            color={bookedSeats.includes(72) ? "success" : "disabled"}
            fontSize='large'
          />
          73
          <ChairOutlined
            color={bookedSeats.includes(73) ? "success" : "disabled"}
            fontSize='large'
          />
          74
          <ChairOutlined
            color={bookedSeats.includes(74) ? "success" : "disabled"}
            fontSize='large'
          />
          75
          <ChairOutlined
            color={bookedSeats.includes(75) ? "success" : "disabled"}
            fontSize='large'
          />
          76
          <ChairOutlined
            color={bookedSeats.includes(76) ? "success" : "disabled"}
            fontSize='large'
          />
          77
          <ChairOutlined
            color={bookedSeats.includes(77) ? "success" : "disabled"}
            fontSize='large'
          />
          78
          <ChairOutlined
            color={bookedSeats.includes(78) ? "success" : "disabled"}
            fontSize='large'
          />
          79
          <ChairOutlined
            color={bookedSeats.includes(79) ? "success" : "disabled"}
            fontSize='large'
          />
          80
          <ChairOutlined
            color={bookedSeats.includes(80) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats ninthRow'>
          81
          <ChairOutlined
            color={bookedSeats.includes(81) ? "success" : "disabled"}
            fontSize='large'
          />
          82
          <ChairOutlined
            color={bookedSeats.includes(82) ? "success" : "disabled"}
            fontSize='large'
          />
          83
          <ChairOutlined
            color={bookedSeats.includes(83) ? "success" : "disabled"}
            fontSize='large'
          />
          84
          <ChairOutlined
            color={bookedSeats.includes(84) ? "success" : "disabled"}
            fontSize='large'
          />
          85
          <ChairOutlined
            color={bookedSeats.includes(85) ? "success" : "disabled"}
            fontSize='large'
          />
          86
          <ChairOutlined
            color={bookedSeats.includes(86) ? "success" : "disabled"}
            fontSize='large'
          />
          87
          <ChairOutlined
            color={bookedSeats.includes(87) ? "success" : "disabled"}
            fontSize='large'
          />
          88
          <ChairOutlined
            color={bookedSeats.includes(88) ? "success" : "disabled"}
            fontSize='large'
          />
          89
          <ChairOutlined
            color={bookedSeats.includes(89) ? "success" : "disabled"}
            fontSize='large'
          />
          90
          <ChairOutlined
            color={bookedSeats.includes(90) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
        <div className='seats tenthRow'>
          91
          <ChairOutlined
            color={bookedSeats.includes(91) ? "success" : "disabled"}
            fontSize='large'
          />
          92
          <ChairOutlined
            color={bookedSeats.includes(92) ? "success" : "disabled"}
            fontSize='large'
          />
          93
          <ChairOutlined
            color={bookedSeats.includes(93) ? "success" : "disabled"}
            fontSize='large'
          />
          94
          <ChairOutlined
            color={bookedSeats.includes(94) ? "success" : "disabled"}
            fontSize='large'
          />
          95
          <ChairOutlined
            color={bookedSeats.includes(95) ? "success" : "disabled"}
            fontSize='large'
          />
          96
          <ChairOutlined
            color={bookedSeats.includes(96) ? "success" : "disabled"}
            fontSize='large'
          />
          97
          <ChairOutlined
            color={bookedSeats.includes(97) ? "success" : "disabled"}
            fontSize='large'
          />
          98
          <ChairOutlined
            color={bookedSeats.includes(98) ? "success" : "disabled"}
            fontSize='large'
          />
          99
          <ChairOutlined
            color={bookedSeats.includes(99) ? "success" : "disabled"}
            fontSize='large'
          />
          100
          <ChairOutlined
            color={bookedSeats.includes(100) ? "success" : "disabled"}
            fontSize='large'
          />
        </div>
      </Container>
    </>
  );
};

export default BookTicket;
