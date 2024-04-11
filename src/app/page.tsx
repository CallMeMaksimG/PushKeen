import { Card } from '@/components/Card';
import { cards } from '@/data/Cards';

export default function Home(): JSX.Element {
    return (
        <div className="container">
            {cards.map((card) => {
                return (
                    <Card key={card.id} title={card.title} text={card.text} />
                );
            })}
            <div className="rectangle"></div>
        </div>
    );
}
