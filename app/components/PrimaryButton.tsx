type Props = {
  // handleClick: () => void;
  className: string;
  label: string;
  // type: string;
};

const PrimaryButton = ({ className, label }: Props) => {
  return (
    <div>
      <button className={className}>{label}</button>
    </div>
  );
};

export default PrimaryButton;
