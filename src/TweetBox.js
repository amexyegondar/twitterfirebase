import React, { useState } from "react";
import "./TweetBox.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "amanual shibabaw",
      username: "codeGhost",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgA0wMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQADBgIBBwj/xAA7EAABAwMDAQUFBQcEAwAAAAABAAIDBBEhBRIxQQYTIlFhFHGBkaEyQlLB0QcjYnKx4fEVU4KSJDND/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAfEQEBAAICAwADAAAAAAAAAAAAAQIREiEDMUEiMlH/2gAMAwEAAhEDEQA/APi4XQXgXTVYroXXYC8Csa3CYtcrsBQtUyiDoNVjWKMF0RGxPIW1wIlfHBdXxRX6IyGDPCeYluQRlN6IltPbomcNJvGBlEtozbITzFO5Ewpb9FDRjyWmpdMM542sHLkVWR0lPA2niiY+TLrHk9Bn5o8Q5MZ7Cb8FcyUpaOFqxSRSW2MkY7/be29viuZ9O8JwCtxbkxr4bdFWYvRPqii2k4Qj6b0SXE/InfF6KstsmskCGfF6IWGlAEri6vmjIKocEho5Xq8vleoC5cq3KwqtxCFFWopdRKyoLpvKgCgGUDLArWqoK1iMLVlsLzarBlWBlwn0XauIZR0LcIeJniR8DLp8YW1fA3ITKnjBQkMJuE0po7dFWRK0woqfAwmdPQiSZrSLA8+5UUFrC609HTNp4xPKLm19nVa3QTsFVQRww7Y/3cY6dUiqIqT2kbqt8Ly2wde/5Jj2kqqyWMU2nUwDnOtuP9VkazTm+2Pmq62apdv2spKTAJ/icb/T5pORpi0kFPUF4dG+KsiHL4jZzR6t5+SP7qOdrtltw+021iCkmmN1Jj2AUAoodubG1j6m+U8oayJ9SGTktldgvt4HfHzTbCwm1CkFj4Uokps8La6hS4KzlVC4OIATTsCKeCyBlit707ljNjcIGaLPCGhlJJ4yeQg5GWTuaLnCXzxeinlipKWOFl5dXSNsqHe5SsUjxxVRz0XZXJSi5soulFmVNXYVQVjUIKwBWMC4aFY0JoC+MXREbR1VUAujGx+SrIS1I4vEj6aPhUxNN0fTbepTyJ5UbTwEgJhFDt6KqmFgLdUwgseRwnTMNCiidVb5zthiG5zjx6Bda/290Ggc72epilmF79y3vHfoFg+1NRPU1E9K0kQQWHdA2BcRfcR1ObfBYlu+CSRtgA5rmOBGCCP8H4Ln8mdi/j8cs7b2s/a7rYkIoHWZ078A/MJdP+1TtdOSGV0MF/8AapmD8lm49Njfpk1a+upWOiO32Yk964njFrW9b46oOCPfLkhotck9Fz25WrSSNfR/tJ1wTN/1V4rYr5xsdbrYjHzC+i9nNV0XtFG1unVLWzW8VLLZr/l+mF8O9nfISImOf/KL3Up2ywzsfGXMeHYIuCCqTLKUtwlfoSQua0skYWFmC0ixCV1MLXEkBKOznaaerbHpesEy1JH/AI9SftED7jvPrYplUucLhpK6cb05spqgqimveyXVENuUzbIb2dn1Xk7WkXtgpys3OzmyXTtTusisSWlKp2c3Qp4UzMQb2pnK1BSNuVHKKyhHNVZRDwh3jKSw7m6illEoql2xchdNQFfGrwFRGiWC6eJ1dTjxBNoIt7fVLIWG903pL2yrYQmTpkduiJiaB91WBlwMK6ABuHC4T6StGUQ3ENPwTym04uibLLVU1Ow9ZH+L/qLlDaJQNqZB3kgijba77Xtfge8ptrMQp9Ne6kDWSxjLnDc4rW/G0zPaLRW1dRJW6WxztvhcD/8ARo4P83+Oix/aPQpaakotUja40dW0Fj3N2kPFw9hbz4S0544819A76vOjy1E825+wOY4tFx1NrLjWmP1TsswsnYIj4nMey5uLWIIze9x5WcUmU3NHxuq+RTR23/NVwxb5reQuntdp7WDeHHa5uDby/Ne6Tp1LMyRxmk9pj8Lou78Nr8h1/pYqFw/Jbl0WvgkL4mR3DjYNsbZKbQaI86hTMLw8NIMnn7ytXTdjxsirp6qOKRkRqmUxY7c+JhtuJtYG/DetwrqChl7oyvZaaoG5rQLWacjn0VccJanlnZDGGh0AahT1lDX7porgwGItaCRYWLuDybXKNqIsm+D19FlNJkOpNloKcF0r5S9jWsDnEDF+vl9E70rWfZZZ9O1J25jHWjeWAlvAPwynmvidlvt7JGQ7wjHkuXjczGOifVNDTPpvaKSZrgeY+tubj3JSKcSQudusQ620eXmmlLSaphGbj5JVUweS0MsGDY7h69EtqYucIjtnqiMt6JbK034Wgmj5SypiF1PKKY0rk4Qr+UZKEM8KWSsVKL1RIKkZXbVwFa0IQatjCLiaTZURBHU7bquMJasjYQmtG7gOz7kNFFuARMTNjwGuHPJ4VsYllT2np2yt8OUy0rQZ6+rZFC3rdzncNHmV3BJpcdDSx0ZMlZvPey2dY8WsDjm/r/RbCnrKbTaRtHG8e0vA7546Hy+CFt10Wa324lFNp1MKKhs6JthK45Lj5lCdoKd79NjmpiHStIsPxjqETHTWa9zY95fw/dgfBEMfHDRvcafvXNePA84Hql9NbtmX00rniQNtTNord197dgZ8vcluhyk6KafwjxOFi0XAJPVbOniE1VUVEhDmyxEPbewt5jyWPjhOnzVNG5oY8ybwd18O4A/VPJsN6JdWonR05kMJc03L7DBv19P1U0jR4oqiZ0U8crSGuLmHAOTb6fIhamnDJ6ORjy0vZ4XW4NxwqKXTKb/Sp2UsW2V9QSHF1/DYNAt8E2uw5daB6Bp8k8FR3bjvqX/vXF3IB5Pn/b0T/ax9S5hI3vj2byALNAtgdBbCN0+GHT9OZtaLhm11+vmlFe99HUQTmNzpJn7Y2eZ/QLey+mb0XUX9kO07nmKd4cSw08Dw3w52k38r3smeuPpdS7XTzxQlsZYC4Otk2Gcf2VOoUUbK6eZw7+eY7iC62Otz0CP7P6JUyyVNXLG6JsmO8cDawHDL5+KXjJeSnPa6hrG0WpNdDE2R4btc0DO38gjdX0uNsQr6Ml1PIctPMZ/CUNqE1BpdM9zCwuH23E3z6lLNB7bQyCoZPRyvon3YH8CU/wAPX4+5C/1p2rmlJJbYBL59pGCndfRsLBLFuMbxuaSLFIagbXHzTgX1W6xslFQx2U6mF735SupFibhLTYlMrUM9trphKxBStKllFoFIyovTe6imZQArmBVNyr4whBq6LCYU+ECwI2nPCrinR0byMJrRwRzsO54BHPolkLWnzTbSp30VXFNT0MtfUNu+OCMYHTc88NHl5lV3qJ2bafRNOGjTe2VpG5rP3UI8bt34iBxi/PvQbqxrax72TyODn7muLSCw+R8x6pZUdqdQE5fqNJLp0rhtbILOY63DS7omFFrffMYa10YP43Mtu9ARg/NNjZtPOWR9D7O6nPW6c98kl3RSFnFjwDlHuqJT98f9Qk3ZiqiqaCoMA8LZQMdfCEzK5PJ1nXV4pvCOxPMOHC38oU79/J2E+ewXVa4c6yTdPxgj2lwH3L9fAF57Y8cbR7mhBOfZcd4ttuM/hgayUjLgf+IXJrJSANwxkXaMIISLq91h1BDqqTNwzP8AAEs7UV80XZ6qma7xMbZnQAnHRFFDas0u0mRoj7y7hdvonw/aE8kkxr4m6mrK6d0+oSvbTNORutv9B+q1A1bSJ3QPpdLmbKyJkcMTSNo2jNvPj7RQmo000koMNNDSB2CZXl+MdbfkrIKfSYIgyTU5JZ5B+9EbCC4fhB+636ldNx7c8y3D7SNTqNWf7EYmtgLiWSueb39PMJbXxlj3h4IcMEHm6qENPVTMHtz4gz/1x05+z+qf1tD7To5qu/E8sX2nO+09vFyPMfUe5HegsY+SQeaCqPEMo2saATYZSxz85QowNLhAznlHVAvwQl8+L3U8lcQxIuoq3HJUUzKmFERm6FaVfEUkNRbEXAbFCREFGQtucK2KdONPgdOyV92tZE3c5znbR7rpnSanXvh7qlZTRxY2xtiuHW83ud4j8kJG9nsdLQ08Yklee8k3cA3uPdYWz06ZWp0WFlNKx0oY+Q4c8iwJ8gFQlI39oZmk0dXDHC5wy2SnBbJ8/wDHqmEkmmGho46Uxwv2ufO2CANYLnAIvk459wWl1GDT9QiNLLRtnd14x8+FnG9ltUZPIyhbQdy0XBqXgOAPoCb/AEWmUndJZv02HYqONmmVJhcXMMjTctt0Tu4QWj0kunwVNPI+N7G7Njo4ywHBurXyALn8tlztjo8XWEWvksg5qi3VUVVUGg5SWr1AC+SlkPaavq88qv2rPKzr9Qz9r6rgahn7X1TaDk1UdTfqiWS3CysFeCR4vqmtNVh1vEhoZTjeqdY9udo726YyJ1S5waDKLtAzngrmOS45RMveO0+0O7ff7oJ6FbH9oXO/jXzzWOz/AGj1rUoJKiWmpI3QN7+aWQNYwjmwHPw/usz2j7PS6Jqs9KHSVkTQ0tc54jvdoJvtJ4PkV9XbLJPSmmuyZ1iHNEox8L8rMVPZtji4VlVV7rnaW7QPdkFXuO/qGOWoxlNFHJTsZHWzwTO5paCmBcT7+fiSmGmyaro8gfDLqAY9pbJBVNbJuaeQW2/obrTxSUfZ9gigpZIQ7mQt3En+Lr9EurK2HU4S1szHPd9k8i/uK3A3Mrq5IJYxJSyNe04e2/iid+F3klEh8RR1NUMqJqmnqWmOtjYRe/27Z2k9RYXB5wR1S2eQZN8o73A12qmfZLaiS91fPJcoKR3KnlkpjFJOVF4eVFM6oKxjrKKJIaiopEdDKMZUUVsanYYUeqRUU9TOWl7iGMjZ5WFyT8x8kzo62dkcdVW1ZFVVEbGh1hEw+XlgcrxRGWlsN9T7RjS9LEtNtD3HZE0C43ea1/7LNcpqjR5IRMH6h3jnzvkPicMWN/y6KKJfJd9G8eMa/UJXvpwX2vng3WdratsLcuCiinPZ/jL6lq43kBwSKfUC4nKiipCBHVZJ5K8FSfNRREKvirS08ptQ6kARdyii1Fp6GqbK0WK1OgusxxJthRRTN8Ke3Lo/9FlrJ4WRyQOAjlvZ2TY2svnVN2smdTt79zS4lzdzjk2OCfgooq+O9FzxhfL2pD5HMl2uZ+G1wD6JfXTU9U1zoagNvwBYbSoojMrQ4yFT6pz9Qp5XkCSxY/b1FjY/O65nl5twoohK1gGWVUOfdRRTp5Fd1FFEDP/Z" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening at UoG?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;