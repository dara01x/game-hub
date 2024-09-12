import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "green" : score > 60 ? "yellow" : "";

  return (
    <>
      <Badge borderRadius={4} fontSize="14px" paddingX={2} colorScheme={color}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
