import Accordion from "./(components)/Accordion";
import Avatar from "./(components)/Avatar";
import Badge from "./(components)/Badge";
import Buttons from "./(components)/Buttons";
import Card from "./(components)/Card";
import Dropdowns from "./(components)/Dropdowns";
import Modal from "./(components)/Modal";
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
    </>
  );
}
