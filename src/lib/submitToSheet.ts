const url = import.meta.env.VITE_APPS_SCRIPT_URL;

if (!url) {
  throw new Error("VITE_APPS_SCRIPT_URL is not defined");
}

export const APPS_SCRIPT_URL = url;

export type ReservationFormData = {
  formType: "reservation";
  fullName: string;
  email: string;
  phone: string;
  experienceInterest: string;
  activities: string[];
  guideImportance: string;
  travelPeriod: string;
  groupSize: string;
  message: string;
};

export type InscriptionFormData = {
  formType: "inscription";
  email: string;
};

export async function submitToSheet(
  data: ReservationFormData | InscriptionFormData,
): Promise<void> {
  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
}
