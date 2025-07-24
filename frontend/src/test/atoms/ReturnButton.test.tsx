import { render, screen } from '@testing-library/react';
import { ReturnButton } from '../../shared/components/atoms/ReturnButton/ReturnButton'
import { BrowserRouter } from 'react-router-dom';

describe('ReturnButton', () => {
    it('ReturnButton に渡した子要素が表示されること', () => {
        render(
            <BrowserRouter>
                <ReturnButton>
                    <span>戻る</span>
                </ReturnButton>
            </BrowserRouter>
        );
        expect(screen.getByText('戻る')).toBeInTheDocument();
    });
});
