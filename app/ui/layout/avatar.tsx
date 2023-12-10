import Image from "next/image";

export const Avatar = ({ avatar }: { avatar?: string | null }) => {
  if (!avatar) return null;
  return (
    <div>
      <Image
        src={avatar}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
    </div>
  );
};
