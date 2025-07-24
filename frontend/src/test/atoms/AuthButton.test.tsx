import { render, screen, fireEvent } from '@testing-library/react';
import { AuthButton } from '../../shared/components/atoms/auth/AuthButton';
import React from 'react';

describe('AuthButton', () => {
  it('「ログイン」のテキストが表示されること', () => {
    render(<AuthButton>ログイン</AuthButton>);
    expect(screen.getByRole('button')).toHaveTextContent('ログイン');
  });

  it('「新規登録」のテキストが表示されること', () => {
    render(<AuthButton>新規登録</AuthButton>);
    expect(screen.getByRole('button')).toHaveTextContent('新規登録');
  });

  it('クリック時に onClick が呼ばれること', () => {
    const onClick = jest.fn();
    render(<AuthButton onClick={onClick}>クリック</AuthButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('disabled にできること', () => {
    render(<AuthButton disabled>無効</AuthButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('type="submit" を渡せること', () => {
    render(<AuthButton type="submit">送信</AuthButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
