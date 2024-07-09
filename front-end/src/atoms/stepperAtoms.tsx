// src/store/stepperAtoms.ts
import { atom } from "recoil";

export const stepsAtom = atom<string[]>({
  key: "steps",
  default: ["Cart", "Details", "Payment", "Review"],
});

export const activeStepAtom = atom<number>({
  key: "activeStep",
  default: Number(localStorage.getItem("activeStep")) ?? 0,
});

export const completedStepsAtom = atom<{ [k: number]: boolean }>({
  key: "completedSteps",
  default: {},
});
