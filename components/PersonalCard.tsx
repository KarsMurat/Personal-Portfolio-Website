import Image from "next/image";

export default function PersonalCard() {
  return (
    <div>
      <Image
        src={"/myAvatar.png"}
        width={200}
        height={200}
        alt="myAvatar"
      />
      <div>About</div>
    </div>
  );
}
