import styles from './CardSelectButtonPack.module.css';
import CardSelectButton from './CardSelectButton/CardSelectButton';

type CardSelectButtonInfo = {
  title: string;
  src: string;
};

type CardSelectButtonPackProps = {
  width: string;
  cardSelectButtonInfos: CardSelectButtonInfo[];
};

const CardSelectButtonPack = ({ width, cardSelectButtonInfos }: CardSelectButtonPackProps) => {
  return (
    <div className={styles.container} style={{ width: width }}>
      {cardSelectButtonInfos.map(({ title, src }) => (
        <CardSelectButton title={title} src={src} key={crypto.randomUUID()} />
      ))}
    </div>
  );
};

export default CardSelectButtonPack;
