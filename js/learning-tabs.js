(() => {
  const coreBtn = document.getElementById('tab-btn-core');
  const showcaseBtn = document.getElementById('tab-btn-showcase');
  const corePanel = document.getElementById('learning-tab-core');
  const showcasePanel = document.getElementById('learning-tab-showcase');

  if (!coreBtn || !showcaseBtn || !corePanel || !showcasePanel) return;

  const baseClass =
    'px-5 py-2 rounded-full border text-sm font-semibold cursor-pointer transition-colors';
  const activeClass = `${baseClass} border-brand-primary bg-brand-primary text-white`;
  const inactiveClass = `${baseClass} border-neutral-border bg-white text-neutral-darkGrey hover:border-brand-primary hover:text-brand-primary`;

  const setActiveTab = (name) => {
    const isCore = name === 'core';

    corePanel.classList.toggle('hidden', !isCore);
    showcasePanel.classList.toggle('hidden', isCore);

    coreBtn.setAttribute('aria-selected', String(isCore));
    showcaseBtn.setAttribute('aria-selected', String(!isCore));

    coreBtn.className = isCore ? activeClass : inactiveClass;
    showcaseBtn.className = !isCore ? activeClass : inactiveClass;
  };

  coreBtn.addEventListener('click', () => setActiveTab('core'));
  showcaseBtn.addEventListener('click', () => setActiveTab('showcase'));
})();
