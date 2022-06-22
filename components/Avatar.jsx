import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

function Avatar({ seed, large=false }) {
  const { data: session } = useSession();
  return (
    <div
      className={`relative ${
        large ? "h-20 w-20" : "h-10 w-10"
      } rounded-full border-gray-300 bg-white overflow-hidden`}
    >
      <Image
        layout="fill"
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.name || "placeholder"
        }.svg`}
      />
    </div>
  );
}

export default Avatar;
