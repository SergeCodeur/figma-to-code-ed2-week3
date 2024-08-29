import { ChevronDown } from "@/assets/icons";
import user from "@/assets/images/john-doe.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 p-2 dark:bg-tokena-dark-blue-2 rounded-xl cursor-pointer hover:bg-tokena-blue/10 dark:hover:bg-[#414451]/10">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={user.src} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <div className="w-[122px]">
          <span className="text-tokena-dark font-medium text-xs block">
            John Doe
          </span>
          <span className="block truncate text-tokena-dark-gray text-xs">
            johndoe8@gmail.com
          </span>
        </div>
      </div>
      <ChevronDown />
    </div>
  );
};

export default UserProfile;
