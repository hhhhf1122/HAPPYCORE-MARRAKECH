import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { submitToSheet } from '../lib/submitToSheet';

const EXPERIENCES = [
  'Happycore Sisterhood',
  'Happycore Roots',
  'Happycore Executive',
  'Je ne sais pas encore',
];

const ACTIVITIES = [
  'Désert & randonnée',
  'Hammam & bien-être',
  'Gastronomie locale',
  'Culture & histoire',
  'Golf',
  'Artisanat & shopping',
  'Musique & cérémonies (Gnawa...)',
  'Sport & aventure',
];


const GUIDE_IMPORTANCE = ['Essentiel', 'Important', 'Peu important', 'Je ne sais pas'];


type FormState = {
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

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  experienceInterest: '',
  activities: [],
  guideImportance: '',
  travelPeriod: '',
  groupSize: '',
  message: '',
};

export default function ReservationPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const toggleArrayValue = (field: 'activities', value: string) => {
    setForm((prev) => {
      const current = prev[field];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [field]: next };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setStatus('submitting');
    try {
      await submitToSheet({ formType: 'reservation', ...form });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center pt-24">
        <div className="max-w-xl mx-auto px-6 text-center py-24">
          <div className="w-16 h-px bg-stone-300 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-stone-900 mb-6">Merci !</h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-10">
            Votre demande a bien été reçue. Notre équipe va étudier vos préférences et vous
            contactera très prochainement par email.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50">
      <SEO
        title="Réserver votre expérience | Happycore"
        description="Dites-nous en plus sur votre voyage idéal au Maroc et recevez une proposition sur-mesure."
        canonical="/reservation"
      />

      {/* Header */}
      <section className="pt-28 pb-16 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500"
          >
            Commencez votre voyage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-950"
          >
            Parlez-nous de votre voyage idéal au Maroc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-6 text-lg leading-8 text-stone-600"
          >
            Quelques questions pour mieux comprendre vos envies. Notre équipe vous recontacte
            ensuite avec une proposition sur-mesure.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-stone-200 bg-white p-8 md:p-12 space-y-12 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
          >
            {/* Contact */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                Vos coordonnées
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Nom complet"
                  value={form.fullName}
                  onChange={(v) => setForm({ ...form, fullName: v })}
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label="Téléphone (optionnel)"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <Field
                  label="Nombre de voyageurs"
                  type="number"
                  value={form.groupSize}
                  onChange={(v) => setForm({ ...form, groupSize: v })}
                />
              </div>
            </fieldset>

            {/* Experience */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                Quelle expérience vous attire ?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCES.map((opt) => (
                  <RadioCard
                    key={opt}
                    name="experienceInterest"
                    label={opt}
                    checked={form.experienceInterest === opt}
                    onChange={() => setForm({ ...form, experienceInterest: opt })}
                  />
                ))}
              </div>
            </fieldset>

            {/* Activities */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                Activités qui vous intéressent
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACTIVITIES.map((opt) => (
                  <CheckboxCard
                    key={opt}
                    label={opt}
                    checked={form.activities.includes(opt)}
                    onChange={() => toggleArrayValue('activities', opt)}
                  />
                ))}
              </div>
            </fieldset>


            {/* Guide importance */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                Quelle importance accordez-vous à un guide certifié ?
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {GUIDE_IMPORTANCE.map((opt) => (
                  <RadioCard
                    key={opt}
                    name="guideImportance"
                    label={opt}
                    checked={form.guideImportance === opt}
                    onChange={() => setForm({ ...form, guideImportance: opt })}
                  />
                ))}
              </div>
            </fieldset>

            {/* Practical */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                Détails pratiques
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <Field
                  label="Période envisagée"
                  placeholder="Ex : Mars 2027"
                  value={form.travelPeriod}
                  onChange={(v) => setForm({ ...form, travelPeriod: v })}
                />
              </div>
            </fieldset>

            {/* Message */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                Un mot pour nous ? (optionnel)
              </legend>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Besoins spécifiques, contraintes, envies particulières..."
                className="w-full px-4 py-3 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none transition-colors resize-none"
              />
            </fieldset>

            {status === 'error' && (
              <p className="text-sm text-rose-600">
                Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous écrire
                directement.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting' || !form.email}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-stone-600 mb-2">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none transition-colors"
      />
    </label>
  );
}

function RadioCard({
  name,
  label,
  checked,
  onChange,
}: {
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
        checked ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-400'
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="accent-stone-900 w-4 h-4 flex-shrink-0"
      />
      <span className="text-sm text-stone-800">{label}</span>
    </label>
  );
}

function CheckboxCard({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
        checked ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-400'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-stone-900 w-4 h-4 flex-shrink-0"
      />
      <span className="text-sm text-stone-800">{label}</span>
    </label>
  );
}