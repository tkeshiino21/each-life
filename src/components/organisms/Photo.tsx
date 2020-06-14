import React, { FC, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Wrap, Image, Button, Img } from '../atoms';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { Photo as PhotoType, Asset } from '../../generated/graphql';

type PhotoProps = {
  photo: {
    __typename?: 'Photo' | undefined;
  } & Pick<PhotoType, 'id' | 'caption' | 'updatedAt'> & {
      image?:
        | ({
            __typename?: 'Asset' | undefined;
          } & Pick<Asset, 'id' | 'url'>)
        | null
        | undefined;
    };
};

const Photo: FC<PhotoProps> = ({ photo }) => {
  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
  const toggleCommentHandler = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <Wrap mt="48px">
      <Img
        className="container"
        src={!photo.image ? '' : photo.image.url}
        // style={{ width: '100%', height: '500px' }}
      />
      {/* {isCommentOpen ? (
        <Button className="text" onClick={toggleCommentHandler}>
          コメントをしまう
          <MdKeyboardArrowUp />
        </Button>
      ) : (
        <Button className="text" onClick={toggleCommentHandler}>
          コメントを表示
          <MdKeyboardArrowDown />
        </Button>
      )}

      {isCommentOpen ? (
        <>
          <Comment />
          <Wrap mt="24px" />
          <CommentForm />
        </>
      ) : (
        <div />
      )} */}
    </Wrap>
  );
};

export default Photo;
