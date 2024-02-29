

type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};
export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
  {
    {
      if (singleLine)
        return (
          <p>
            {name}, {email},{isActive ? "Aktiv" : "Inaktiv"}
          </p>
        );
    }
    return (
      <>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Status: {isActive ? "Aktiv" : "Inaktiv"}{" "}</p>
      </>
    );
  }
}
