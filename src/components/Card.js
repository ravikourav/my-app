import React, { useState } from 'react';
import { Button, useMediaQuery } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Card({ cardData , buttonBgColor}) {
    const [selectedCardId, setSelectedCardId] = useState(cardData[0].id);
    const isMobile = useMediaQuery('(max-width:764px)');

    const handleCardSelection = (event, newAlignment) => {
        setSelectedCardId(newAlignment);
    };

    const selectedCard = cardData.find(card => card.id === selectedCardId);

    return (
        <div style={{ width: '90vw', display: 'flex', borderRadius: '30px', padding: '20px', alignItems: 'center', flexDirection: 'column' }}>
            <ToggleButtonGroup
                value={selectedCardId}
                exclusive
                onChange={handleCardSelection}
            >
                {cardData.map(card => (
                    <ToggleButton color='primary' value={card.id} sx={{border: 'none'}}>
                        {card.id}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <div style={{ display: 'flex', alignItems: 'center', margin: '20px',justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row-reverse' }}>
                <div>
                    <img style={{ width: '100%' }} src={selectedCard.img} alt={selectedCard.title} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', marginLeft: '30px', textAlign: isMobile ? 'center' : 'left' }}>
                    <p style={{ fontSize: '1.6rem', fontWeight: '500', color: 'rgb(39 39 42)' }}>{selectedCard.title}</p>
                    {selectedCard.pera.map((paragraph, index) => (
                        <p key={index} style={{ color: 'rgb(82 82 91)', fontWeight: '400' }}>{paragraph}</p>
                    ))}
                    <Button variant="contained" sx={{ textWrap: 'nowrap', backgroundColor : buttonBgColor ,padding: '10px' }}>{selectedCard.ButtonText}</Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
