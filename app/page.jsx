import Accordion from "./(components)/Accordion";
import Avatar from "./(components)/Avatar";
import Badge from "./(components)/Badge";
import Buttons from "./(components)/Buttons";
import Card from "./(components)/Card";
import Carousel from "./(components)/Carousel";
import ChatBubble from "./(components)/ChatBubble";
import Collapse from "./(components)/Collapse";
import Countdown from "./(components)/Countdown";
import Diff from "./(components)/Diff";
import Dropdowns from "./(components)/Dropdowns";
import Keyboard from "./(components)/Keyboard";
import Modal from "./(components)/Modal";
import Stats from "./(components)/Stats";
import Swap from "./(components)/Swap";
import Theme from "./(components)/Theme";

export default function Home() {
  return (
    <>
      <Buttons />
      <Dropdowns />
      <Modal />
      <Swap />
      <Theme />
      <Accordion />
      <Avatar />
      <Badge />
      <Card />
      <Carousel />
      <ChatBubble />
      <Collapse />
      <Countdown />
      <Diff />
      <Keyboard />
      <Stats />
    </>
  );
}
