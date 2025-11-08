# Guest Profiles - Project Context

## Project Overview
Hotel guest check-in flow prototype with three distinct flow variations built with Next.js 15, React 19, TypeScript 5, and Tailwind CSS 4. This is a customer demo prototype deployed on Vercel.

**Repository**: https://github.com/msantana-canary/guest-profiles
**Tech Stack**: Next.js 15 + React 19 + TypeScript 5 + Tailwind CSS 4 + Framer Motion
**Design System**: Canary UI components with #926e27 gold brand color
**Viewport**: 430x932 (iPhone 14 Pro Max)

## Three Flow Variations

### 1. Profile Creation Flow
**URL**: `/flow/profile-creation`

**Flow**: Welcome → RegCard → Add-ons → ID → Credit Card → Save Profile Prompt → MFA → Profile Saving Animation → Loading → Completion

**Key Features**:
- Save profile prompt after credit card step with "Create your guest profile" messaging
- Optional profile creation (can skip with "No thanks")
- MFA verification using phone/email from registration card
- Profile saving transition animation with spinner → checkmark
- Header shows/hides stepper dynamically (no stepper on save-prompt and MFA steps)

**Components Created**:
- `SaveProfilePromptContent.tsx` - Content-only version working with CheckInHeader
- `MFAVerificationContent.tsx` - 6-digit code input with auto-focus and paste support
- `ProfileSaveTransition.tsx` - Animated loading → success transition

### 2. Registration Match Flow
**URL**: `/flow/registration-match`

**Initial Recognition**: Upfront profile recognition BEFORE hotel landing page

**Two Paths**:
- **"Yes, that's me"**: Profile Recognized → MFA → Pre-filled Review → Privacy/Signature → Add-ons → Loading → Completion
- **"No, that's not me"**: Redirects to original flow (Welcome video → RegCard → Add-ons → ID → Credit Card → Loading → Completion)

**Key Features**:
- Profile recognition with guest info (name, email, phone)
- Two completely separate flow paths with no overlap
- Pre-filled review shows contact info, vehicle info, verified ID status, and saved payment method
- Privacy/signature step with policy checkboxes and signature canvas
- "Back to Start" returns to Profile Recognized page (resets flow state)

**Components Created**:
- `WelcomeBackRecognitionContent.tsx` - Reusable recognition component with customizable description
- `PrefilledReviewStep.tsx` - Review pre-filled contact, vehicle, ID, and payment info
- `PrivacySignatureStep.tsx` - Policy agreements with signature canvas

**4-step progress**: Verification (1) → Review info (2) → Policies (3) → Add-ons (4)

### 3. Reg Card Input Flow
**URL**: `/flow/reg-card-input`

**Post-Registration Recognition**: Profile recognition AFTER user fills registration card

**Flow**: Welcome → RegCard → Profile Recognition → Two Paths

**Two Paths**:
- **"Yes, that's me"**: Post-Regcard Recognition → Saved Info Review (ID + Payment only) → Loading → Completion
- **"No, that's not me"**: Post-Regcard Recognition → Add-ons → ID → Credit Card → Loading → Completion

**Key Features**:
- Recognition triggered after regcard completion
- Custom description: "Based on the information you just provided, we've recognized that you have a profile with us from a previous stay"
- Saved info review shows only ID and payment method (no contact/vehicle since just entered)
- No stepper on Profile Recognition or Saved Info Review steps

**Components Created**:
- `SavedInfoReviewStep.tsx` - Review saved ID verification and payment method only

## Technical Implementation

### Flow Logic System
**File**: `app/flow/[flowType]/page.tsx`

**State Management**:
```typescript
- currentStep: Current step in flow
- useDefaultFlow: Tracks if user declined registration-match recognition
- acceptedPostRegcard: Tracks if user accepted post-regcard recognition
- userContact: Demo data for phone/email
```

**Dynamic Step Sequences**:
```typescript
getStepSequence(): Returns different step arrays based on flowType and user choices
- Profile Creation: Base steps + save-prompt + mfa + profile-saving
- Registration Match (accepted): welcome-back + mfa + prefilled-review + privacy-signature + addons
- Registration Match (declined): Base steps (original flow)
- Reg Card Input (accepted): welcome + regcard + post-regcard-recognition + saved-info-review
- Reg Card Input (declined): welcome + regcard + post-regcard-recognition + full base steps
```

### Component Architecture

**Content-Only Pattern**:
Components designed to work with `CheckInHeader`:
- `SaveProfilePromptContent`
- `MFAVerificationContent`
- `WelcomeBackRecognitionContent`

All use same structure:
- Full height/width bg-[#FCF9F4]
- Internal padding px-6 py-8 pb-24
- Left-aligned content
- Consistent 18px body text, 24px headers

**CheckInHeader Features**:
- `showStepper` prop for conditional stepper display
- Fades stepper area when false (maintains height for smooth transitions)
- Static header with animated text content only

### Animations
**Framer Motion Transitions**:
```typescript
const transition = {
  type: 'tween' as const,
  ease: [0.4, 0.0, 0.2, 1] as const, // iOS-style easing
  duration: 0.35,
};
```

**Animation Patterns**:
- Welcome step: Exit slides left with opacity fade
- Regular steps: Enter from right (x: '100%'), exit left with opacity
- Profile-saving & transitional steps: Full-screen overlays
- Header: Static position, only text content animates

### Key Handlers

**Registration Match Flow**:
```typescript
handleNotMe(): Sets useDefaultFlow=true, navigates to 'welcome' (original flow)
```

**Reg Card Input Flow**:
```typescript
handlePostRegcardYes(): Sets acceptedPostRegcard=true, navigates to 'saved-info-review'
handlePostRegcardNo(): Calls nextStep() to continue with add-ons
```

**Reset Flow**:
```typescript
resetFlow(): Resets state flags, returns to initial step based on flowType
```

## Issues Fixed During Development

### TypeScript Errors (All Fixed)

1. **Transition type error**:
   - Issue: `type: 'tween'` inferred as `string` instead of literal type
   - Fix: Added `as const` assertion

2. **Ease array error**:
   - Issue: `[0.4, 0.0, 0.2, 1]` treated as `number[]` instead of tuple
   - Fix: Added `as const` assertion to ease array

3. **CanaryCheckbox label error**:
   - Issue: Label prop only accepted `string`, but PrivacySignatureStep needed JSX
   - Fix: Changed type to `string | ReactNode` in CanaryCheckbox.tsx

## File Structure

### New Components Created
```
components/check-in/v2/
├── SaveProfilePromptContent.tsx      # Profile creation save prompt
├── MFAVerificationContent.tsx        # 6-digit MFA code input
├── ProfileSaveTransition.tsx         # Animated saving transition
├── WelcomeBackRecognitionContent.tsx # Reusable profile recognition
├── PrefilledReviewStep.tsx           # Registration match review
├── PrivacySignatureStep.tsx          # Policy agreement + signature
├── SavedInfoReviewStep.tsx           # Reg card input saved info
├── SaveProfilePrompt.tsx             # Legacy (not used)
├── MFAVerification.tsx               # Legacy (not used)
└── WelcomeBackRecognition.tsx        # Legacy (not used)
```

### Modified Files
```
app/flow/[flowType]/page.tsx                    # Main flow logic
components/check-in/CheckInHeader.tsx           # Added showStepper prop
components/check-in/v2/index.ts                 # Export new components
components/canary-ui/forms/CanaryCheckbox.tsx   # Support ReactNode labels
```

## Git Commit History

```
7528ab5 - fix: Allow ReactNode in CanaryCheckbox label prop for flexible content
f60a6fd - chore: Force Vercel to use latest commit with TypeScript fixes
29ad04a - fix: Add const assertion to ease array for Framer Motion type compatibility
3162bc4 - chore: Trigger Vercel rebuild
15df1c3 - fix: Add const assertion to transition type for Framer Motion compatibility
4faf2a3 - feat: Implement three distinct check-in flow variations
7b6f06e - feat: Complete hotel check-in flow with video backgrounds and animations
feb7a57 - Initial commit: Guest Profiles prototype foundation
```

## Design Patterns & Conventions

### Colors
- Primary: `#926e27` (gold)
- Background: `#FCF9F4` (cream)
- Text: `#000000` (black), `#666666` (gray), `#414141` (dark gray)
- Success: `green-600`

### Typography
- Font: Roboto
- Headers: 24px semibold
- Body: 18px regular
- Labels: 14px
- Footer: 12px

### Spacing
- Container padding: `px-6 py-8 pb-24`
- Card spacing: `mb-12` or `mb-8`
- Input spacing: `space-y-6`

### Button States
- Primary: `bg-[#926e27] hover:bg-[#8c6a25]`
- Disabled: Same color with `opacity-40 cursor-not-allowed`
- Outlined: `border border-[#926e27] text-[#926e27] hover:bg-[rgba(146,110,39,0.08)]`

## Current State

### Deployed ✅
- Repository: https://github.com/msantana-canary/guest-profiles
- Vercel: Successfully deployed (latest commit: 7528ab5)
- All three flows functional

### Testing URLs (Production)
- Profile Creation: `/flow/profile-creation`
- Registration Match: `/flow/registration-match`
- Reg Card Input: `/flow/reg-card-input`

### Local Development
- Dev server runs on port 3001 (port 3000 was occupied)
- Build succeeds with no errors
- All TypeScript issues resolved

## Potential Next Steps / TODOs

### Features
- [ ] Add real form validation to registration card
- [ ] Implement actual signature capture and storage
- [ ] Add vehicle information to reg-card-input recognition
- [ ] Create add-ons selection for registration-match flow (currently just placeholder)
- [ ] Add loading state to completion page

### Polish
- [ ] Add error states and error handling
- [ ] Implement actual MFA verification (currently just auto-proceeds)
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Optimize animations for performance
- [ ] Add mobile gesture support (swipe between steps)

### Technical
- [ ] Consider adding React Query for state management
- [ ] Add unit tests for flow logic
- [ ] Add E2E tests with Playwright/Cypress
- [ ] Optimize bundle size
- [ ] Add analytics tracking for user flows

## Important Notes

1. **This is a prototype** - No backend integration, all data is demo/static
2. **Mobile-first design** - Optimized for 430x932 viewport
3. **Flow branching** - Registration Match and Reg Card Input have two completely separate paths
4. **Framer Motion** - Requires `as const` assertions for transition types
5. **Canary UI** - Custom design system, not a public package
6. **Demo purposes** - Built for customer demonstrations on Vercel

## Contact & Context
- Developer: msantana-canary (GitHub)
- Created with: Claude Code
- Last updated: 2025-01-08
