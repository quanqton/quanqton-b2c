import { create } from 'zustand'

interface UIState {
    isCartOpen: boolean
    isMobileMenuOpen: boolean
    toggleCart: () => void
    closeCart: () => void
    toggleMobileMenu: () => void
    closeMobileMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
    isCartOpen: false,
    isMobileMenuOpen: false,
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    closeCart: () => set({ isCartOpen: false }),
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}))
