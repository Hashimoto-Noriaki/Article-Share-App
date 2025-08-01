import { renderHook } from '@testing-library/react';
import { useLoginUser } from '../../shared/hooks/useLoginUser';
import { LoginUserProvider } from '../../shared/contexts/LoginUser/LoginUserProvider';

describe('useLoginUser', () => {
    //テスト1: 正常ケース
    it('LoginUserProviderに包まれた状態で useLoginUser を使うと、正しいコンテキスト値が取得できること', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <LoginUserProvider>{children}</LoginUserProvider>
    );
        //🔍 renderHook で useLoginUser を実行（Provider 付き）
        const { result } = renderHook(() => useLoginUser(), { wrapper });
        // 検証: context 内に必要なプロパティが存在しているか
        expect(result.current).toHaveProperty('loginUser');
        expect(result.current).toHaveProperty('setLoginUser');
        expect(result.current).toHaveProperty('logout');
    });
    it('should throw error when used outside of LoginUserProvider', () => {
    // エラーメッセージ検証のため try-catch でテストする
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {}); // suppress expected error logs
    // 🔍 Provider 外で useLoginUser を呼び出すとエラーになることを確認
    expect(() => renderHook(() => useLoginUser())).toThrow(
        'useLoginUser must be used within a LoginUserProvider'
    );
        // 🧹 suppress を解除
        consoleError.mockRestore();
    });
});
