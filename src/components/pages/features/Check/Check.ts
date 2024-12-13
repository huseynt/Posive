export default function Check() {
    const isEnvValid = import.meta.env.VITE_PORJECT_VALID;
    const isEnvValidCheck = import.meta.env[`VITE_${isEnvValid}`];    
    document.documentElement.style.setProperty('--valid-theme', isEnvValidCheck ? 'true' : 'false');
}