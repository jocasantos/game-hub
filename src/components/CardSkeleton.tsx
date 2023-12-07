import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="238px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
