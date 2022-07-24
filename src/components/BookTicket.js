import React, { useState } from "react";
import Navigation from "./Navbar";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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

  const bookingHandler = () => {
    if (seatSelected.length === 0) {
      alert("No seats selected!!!");
      return;
    } else {
      let seats = seatSelected.length;
      let total = price * seats;
      alert(
        `Thank you for booking ${seats} seats, the total amount is ${total} Rs.`
      );
    }
  };

  return (
    <>
      <Navigation />
      <Container>
        <div className='bookingMovieHeading'>
          <h2>Theater Name - {theaterName}</h2>
          <h3>Movie Name - {movieName}</h3>
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
            onClick={() => seatClickedHandler(3)}
            color={
              bookedSeats.includes(3)
                ? "success"
                : seatSelected.includes(3)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          4
          <ChairOutlined
            onClick={() => seatClickedHandler(4)}
            color={
              bookedSeats.includes(4)
                ? "success"
                : seatSelected.includes(4)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          5
          <ChairOutlined
            onClick={() => seatClickedHandler(5)}
            color={
              bookedSeats.includes(5)
                ? "success"
                : seatSelected.includes(5)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          6
          <ChairOutlined
            onClick={() => seatClickedHandler(6)}
            color={
              bookedSeats.includes(6)
                ? "success"
                : seatSelected.includes(6)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          7
          <ChairOutlined
            onClick={() => seatClickedHandler(7)}
            color={
              bookedSeats.includes(7)
                ? "success"
                : seatSelected.includes(7)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          8
          <ChairOutlined
            onClick={() => seatClickedHandler(8)}
            color={
              bookedSeats.includes(8)
                ? "success"
                : seatSelected.includes(8)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          9
          <ChairOutlined
            onClick={() => seatClickedHandler(9)}
            color={
              bookedSeats.includes(9)
                ? "success"
                : seatSelected.includes(9)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          10
          <ChairOutlined
            onClick={() => seatClickedHandler(10)}
            color={
              bookedSeats.includes(10)
                ? "success"
                : seatSelected.includes(10)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats secondRow'>
          11
          <ChairOutlined
            onClick={() => seatClickedHandler(11)}
            color={
              bookedSeats.includes(11)
                ? "success"
                : seatSelected.includes(11)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          12
          <ChairOutlined
            onClick={() => seatClickedHandler(12)}
            color={
              bookedSeats.includes(12)
                ? "success"
                : seatSelected.includes(12)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          13
          <ChairOutlined
            onClick={() => seatClickedHandler(13)}
            color={
              bookedSeats.includes(13)
                ? "success"
                : seatSelected.includes(13)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          14
          <ChairOutlined
            onClick={() => seatClickedHandler(14)}
            color={
              bookedSeats.includes(14)
                ? "success"
                : seatSelected.includes(14)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          15
          <ChairOutlined
            onClick={() => seatClickedHandler(15)}
            color={
              bookedSeats.includes(15)
                ? "success"
                : seatSelected.includes(15)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          16
          <ChairOutlined
            onClick={() => seatClickedHandler(16)}
            color={
              bookedSeats.includes(16)
                ? "success"
                : seatSelected.includes(16)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          17
          <ChairOutlined
            onClick={() => seatClickedHandler(17)}
            color={
              bookedSeats.includes(17)
                ? "success"
                : seatSelected.includes(17)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          18
          <ChairOutlined
            onClick={() => seatClickedHandler(18)}
            color={
              bookedSeats.includes(18)
                ? "success"
                : seatSelected.includes(18)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          19
          <ChairOutlined
            onClick={() => seatClickedHandler(19)}
            color={
              bookedSeats.includes(19)
                ? "success"
                : seatSelected.includes(19)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          20
          <ChairOutlined
            onClick={() => seatClickedHandler(20)}
            color={
              bookedSeats.includes(20)
                ? "success"
                : seatSelected.includes(20)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats thirdRow'>
          21
          <ChairOutlined
            onClick={() => seatClickedHandler(21)}
            color={
              bookedSeats.includes(21)
                ? "success"
                : seatSelected.includes(21)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          22
          <ChairOutlined
            onClick={() => seatClickedHandler(22)}
            color={
              bookedSeats.includes(22)
                ? "success"
                : seatSelected.includes(22)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          23
          <ChairOutlined
            onClick={() => seatClickedHandler(23)}
            color={
              bookedSeats.includes(23)
                ? "success"
                : seatSelected.includes(23)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          24
          <ChairOutlined
            onClick={() => seatClickedHandler(24)}
            color={
              bookedSeats.includes(24)
                ? "success"
                : seatSelected.includes(24)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          25
          <ChairOutlined
            onClick={() => seatClickedHandler(25)}
            color={
              bookedSeats.includes(25)
                ? "success"
                : seatSelected.includes(25)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          26
          <ChairOutlined
            onClick={() => seatClickedHandler(26)}
            color={
              bookedSeats.includes(26)
                ? "success"
                : seatSelected.includes(26)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          27
          <ChairOutlined
            onClick={() => seatClickedHandler(27)}
            color={
              bookedSeats.includes(27)
                ? "success"
                : seatSelected.includes(27)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          28
          <ChairOutlined
            onClick={() => seatClickedHandler(28)}
            color={
              bookedSeats.includes(28)
                ? "success"
                : seatSelected.includes(28)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          29
          <ChairOutlined
            onClick={() => seatClickedHandler(29)}
            color={
              bookedSeats.includes(29)
                ? "success"
                : seatSelected.includes(29)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          30
          <ChairOutlined
            onClick={() => seatClickedHandler(30)}
            color={
              bookedSeats.includes(30)
                ? "success"
                : seatSelected.includes(30)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats fourRow'>
          31
          <ChairOutlined
            onClick={() => seatClickedHandler(31)}
            color={
              bookedSeats.includes(31)
                ? "success"
                : seatSelected.includes(31)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          32
          <ChairOutlined
            onClick={() => seatClickedHandler(32)}
            color={
              bookedSeats.includes(32)
                ? "success"
                : seatSelected.includes(32)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          33
          <ChairOutlined
            onClick={() => seatClickedHandler(33)}
            color={
              bookedSeats.includes(33)
                ? "success"
                : seatSelected.includes(33)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          34
          <ChairOutlined
            onClick={() => seatClickedHandler(34)}
            color={
              bookedSeats.includes(34)
                ? "success"
                : seatSelected.includes(34)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          35
          <ChairOutlined
            onClick={() => seatClickedHandler(35)}
            color={
              bookedSeats.includes(35)
                ? "success"
                : seatSelected.includes(35)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          36
          <ChairOutlined
            onClick={() => seatClickedHandler(36)}
            color={
              bookedSeats.includes(36)
                ? "success"
                : seatSelected.includes(36)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          37
          <ChairOutlined
            onClick={() => seatClickedHandler(37)}
            color={
              bookedSeats.includes(37)
                ? "success"
                : seatSelected.includes(37)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          38
          <ChairOutlined
            onClick={() => seatClickedHandler(38)}
            color={
              bookedSeats.includes(38)
                ? "success"
                : seatSelected.includes(38)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          39
          <ChairOutlined
            onClick={() => seatClickedHandler(39)}
            color={
              bookedSeats.includes(39)
                ? "success"
                : seatSelected.includes(39)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          40
          <ChairOutlined
            onClick={() => seatClickedHandler(40)}
            color={
              bookedSeats.includes(40)
                ? "success"
                : seatSelected.includes(40)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats fifthRow'>
          41
          <ChairOutlined
            onClick={() => seatClickedHandler(41)}
            color={
              bookedSeats.includes(41)
                ? "success"
                : seatSelected.includes(41)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          42
          <ChairOutlined
            onClick={() => seatClickedHandler(42)}
            color={
              bookedSeats.includes(42)
                ? "success"
                : seatSelected.includes(42)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          43
          <ChairOutlined
            onClick={() => seatClickedHandler(43)}
            color={
              bookedSeats.includes(43)
                ? "success"
                : seatSelected.includes(43)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          44
          <ChairOutlined
            onClick={() => seatClickedHandler(44)}
            color={
              bookedSeats.includes(44)
                ? "success"
                : seatSelected.includes(44)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          45
          <ChairOutlined
            onClick={() => seatClickedHandler(45)}
            color={
              bookedSeats.includes(45)
                ? "success"
                : seatSelected.includes(45)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          46
          <ChairOutlined
            onClick={() => seatClickedHandler(46)}
            color={
              bookedSeats.includes(46)
                ? "success"
                : seatSelected.includes(46)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          47
          <ChairOutlined
            onClick={() => seatClickedHandler(47)}
            color={
              bookedSeats.includes(47)
                ? "success"
                : seatSelected.includes(47)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          48
          <ChairOutlined
            onClick={() => seatClickedHandler(48)}
            color={
              bookedSeats.includes(48)
                ? "success"
                : seatSelected.includes(48)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          49
          <ChairOutlined
            onClick={() => seatClickedHandler(49)}
            color={
              bookedSeats.includes(49)
                ? "success"
                : seatSelected.includes(49)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          50
          <ChairOutlined
            onClick={() => seatClickedHandler(50)}
            color={
              bookedSeats.includes(50)
                ? "success"
                : seatSelected.includes(50)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats sixthRow'>
          51
          <ChairOutlined
            onClick={() => seatClickedHandler(51)}
            color={
              bookedSeats.includes(51)
                ? "success"
                : seatSelected.includes(51)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          52
          <ChairOutlined
            onClick={() => seatClickedHandler(52)}
            color={
              bookedSeats.includes(52)
                ? "success"
                : seatSelected.includes(52)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          53
          <ChairOutlined
            onClick={() => seatClickedHandler(53)}
            color={
              bookedSeats.includes(53)
                ? "success"
                : seatSelected.includes(53)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          54
          <ChairOutlined
            onClick={() => seatClickedHandler(54)}
            color={
              bookedSeats.includes(54)
                ? "success"
                : seatSelected.includes(54)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          55
          <ChairOutlined
            onClick={() => seatClickedHandler(55)}
            color={
              bookedSeats.includes(55)
                ? "success"
                : seatSelected.includes(55)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          56
          <ChairOutlined
            onClick={() => seatClickedHandler(56)}
            color={
              bookedSeats.includes(56)
                ? "success"
                : seatSelected.includes(56)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          57
          <ChairOutlined
            onClick={() => seatClickedHandler(57)}
            color={
              bookedSeats.includes(57)
                ? "success"
                : seatSelected.includes(57)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          58
          <ChairOutlined
            onClick={() => seatClickedHandler(58)}
            color={
              bookedSeats.includes(58)
                ? "success"
                : seatSelected.includes(58)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          59
          <ChairOutlined
            onClick={() => seatClickedHandler(59)}
            color={
              bookedSeats.includes(59)
                ? "success"
                : seatSelected.includes(59)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          60
          <ChairOutlined
            onClick={() => seatClickedHandler(60)}
            color={
              bookedSeats.includes(60)
                ? "success"
                : seatSelected.includes(60)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats seventhRow'>
          61
          <ChairOutlined
            onClick={() => seatClickedHandler(61)}
            color={
              bookedSeats.includes(61)
                ? "success"
                : seatSelected.includes(61)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          62
          <ChairOutlined
            onClick={() => seatClickedHandler(62)}
            color={
              bookedSeats.includes(62)
                ? "success"
                : seatSelected.includes(62)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          63
          <ChairOutlined
            onClick={() => seatClickedHandler(63)}
            color={
              bookedSeats.includes(63)
                ? "success"
                : seatSelected.includes(63)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          64
          <ChairOutlined
            onClick={() => seatClickedHandler(64)}
            color={
              bookedSeats.includes(64)
                ? "success"
                : seatSelected.includes(64)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          65
          <ChairOutlined
            onClick={() => seatClickedHandler(65)}
            color={
              bookedSeats.includes(65)
                ? "success"
                : seatSelected.includes(65)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          66
          <ChairOutlined
            onClick={() => seatClickedHandler(66)}
            color={
              bookedSeats.includes(66)
                ? "success"
                : seatSelected.includes(66)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          67
          <ChairOutlined
            onClick={() => seatClickedHandler(67)}
            color={
              bookedSeats.includes(67)
                ? "success"
                : seatSelected.includes(67)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          68
          <ChairOutlined
            onClick={() => seatClickedHandler(68)}
            color={
              bookedSeats.includes(68)
                ? "success"
                : seatSelected.includes(68)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          69
          <ChairOutlined
            onClick={() => seatClickedHandler(69)}
            color={
              bookedSeats.includes(69)
                ? "success"
                : seatSelected.includes(69)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          70
          <ChairOutlined
            onClick={() => seatClickedHandler(70)}
            color={
              bookedSeats.includes(70)
                ? "success"
                : seatSelected.includes(70)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats eightRow'>
          71
          <ChairOutlined
            onClick={() => seatClickedHandler(71)}
            color={
              bookedSeats.includes(71)
                ? "success"
                : seatSelected.includes(71)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          72
          <ChairOutlined
            onClick={() => seatClickedHandler(72)}
            color={
              bookedSeats.includes(72)
                ? "success"
                : seatSelected.includes(72)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          73
          <ChairOutlined
            onClick={() => seatClickedHandler(73)}
            color={
              bookedSeats.includes(73)
                ? "success"
                : seatSelected.includes(73)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          74
          <ChairOutlined
            onClick={() => seatClickedHandler(74)}
            color={
              bookedSeats.includes(74)
                ? "success"
                : seatSelected.includes(74)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          75
          <ChairOutlined
            onClick={() => seatClickedHandler(75)}
            color={
              bookedSeats.includes(75)
                ? "success"
                : seatSelected.includes(75)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          76
          <ChairOutlined
            onClick={() => seatClickedHandler(76)}
            color={
              bookedSeats.includes(76)
                ? "success"
                : seatSelected.includes(76)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          77
          <ChairOutlined
            onClick={() => seatClickedHandler(77)}
            color={
              bookedSeats.includes(77)
                ? "success"
                : seatSelected.includes(77)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          78
          <ChairOutlined
            onClick={() => seatClickedHandler(78)}
            color={
              bookedSeats.includes(78)
                ? "success"
                : seatSelected.includes(78)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          79
          <ChairOutlined
            onClick={() => seatClickedHandler(79)}
            color={
              bookedSeats.includes(79)
                ? "success"
                : seatSelected.includes(79)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          80
          <ChairOutlined
            onClick={() => seatClickedHandler(80)}
            color={
              bookedSeats.includes(80)
                ? "success"
                : seatSelected.includes(80)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats ninthRow'>
          81
          <ChairOutlined
            onClick={() => seatClickedHandler(81)}
            color={
              bookedSeats.includes(81)
                ? "success"
                : seatSelected.includes(81)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          82
          <ChairOutlined
            onClick={() => seatClickedHandler(82)}
            color={
              bookedSeats.includes(82)
                ? "success"
                : seatSelected.includes(82)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          83
          <ChairOutlined
            onClick={() => seatClickedHandler(83)}
            color={
              bookedSeats.includes(83)
                ? "success"
                : seatSelected.includes(83)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          84
          <ChairOutlined
            onClick={() => seatClickedHandler(84)}
            color={
              bookedSeats.includes(84)
                ? "success"
                : seatSelected.includes(84)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          85
          <ChairOutlined
            onClick={() => seatClickedHandler(85)}
            color={
              bookedSeats.includes(85)
                ? "success"
                : seatSelected.includes(85)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          86
          <ChairOutlined
            onClick={() => seatClickedHandler(86)}
            color={
              bookedSeats.includes(86)
                ? "success"
                : seatSelected.includes(86)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          87
          <ChairOutlined
            onClick={() => seatClickedHandler(87)}
            color={
              bookedSeats.includes(87)
                ? "success"
                : seatSelected.includes(87)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          88
          <ChairOutlined
            onClick={() => seatClickedHandler(88)}
            color={
              bookedSeats.includes(88)
                ? "success"
                : seatSelected.includes(88)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          89
          <ChairOutlined
            onClick={() => seatClickedHandler(89)}
            color={
              bookedSeats.includes(89)
                ? "success"
                : seatSelected.includes(89)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          90
          <ChairOutlined
            onClick={() => seatClickedHandler(90)}
            color={
              bookedSeats.includes(90)
                ? "success"
                : seatSelected.includes(90)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats tenthRow'>
          91
          <ChairOutlined
            onClick={() => seatClickedHandler(91)}
            color={
              bookedSeats.includes(91)
                ? "success"
                : seatSelected.includes(91)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          92
          <ChairOutlined
            onClick={() => seatClickedHandler(92)}
            color={
              bookedSeats.includes(92)
                ? "success"
                : seatSelected.includes(92)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          93
          <ChairOutlined
            onClick={() => seatClickedHandler(93)}
            color={
              bookedSeats.includes(93)
                ? "success"
                : seatSelected.includes(93)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          94
          <ChairOutlined
            onClick={() => seatClickedHandler(94)}
            color={
              bookedSeats.includes(94)
                ? "success"
                : seatSelected.includes(94)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          95
          <ChairOutlined
            onClick={() => seatClickedHandler(95)}
            color={
              bookedSeats.includes(95)
                ? "success"
                : seatSelected.includes(95)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          96
          <ChairOutlined
            onClick={() => seatClickedHandler(96)}
            color={
              bookedSeats.includes(96)
                ? "success"
                : seatSelected.includes(96)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          97
          <ChairOutlined
            onClick={() => seatClickedHandler(97)}
            color={
              bookedSeats.includes(97)
                ? "success"
                : seatSelected.includes(97)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          98
          <ChairOutlined
            onClick={() => seatClickedHandler(98)}
            color={
              bookedSeats.includes(98)
                ? "success"
                : seatSelected.includes(98)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          99
          <ChairOutlined
            onClick={() => seatClickedHandler(99)}
            color={
              bookedSeats.includes(99)
                ? "success"
                : seatSelected.includes(99)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
          100
          <ChairOutlined
            onClick={() => seatClickedHandler(100)}
            color={
              bookedSeats.includes(100)
                ? "success"
                : seatSelected.includes(100)
                ? "primary"
                : "disabled"
            }
            fontSize='large'
          />
        </div>
        <div className='seats eleventhRow'>
          Booked
          <ChairOutlined color='success' fontSize='large' />
          Selected
          <ChairOutlined color='primary' fontSize='large' />
          Seats Empty
          <ChairOutlined color='disabled' fontSize='large' />
          <Button onClick={bookingHandler}>Book</Button>
        </div>
      </Container>
    </>
  );
};

export default BookTicket;
