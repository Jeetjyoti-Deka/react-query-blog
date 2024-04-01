type UserCardProps = {
  name: string;
  street: string;
  city: string;
  company: string;
  email: string;
};

const UserCard = ({ name, street, city, company, email }: UserCardProps) => {
  return (
    <div className="w-72 rounded-[8px] overflow-hidden bg-slate-400 justify-self-center">
      <div className="w-full h-24 bg-slate-800 relative">
        <div className="w-20 h-20 absolute top-10 left-[50%] -translate-x-[50%] bg-white rounded-full">
          <img
            src="/icons/user.svg"
            alt="user_img"
            className="object-contain w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-6 px-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>
          {street}, {city}
        </p>
        <p>Company: {company}</p>
        <p>email: {email}</p>
      </div>
    </div>
  );
};
export default UserCard;
