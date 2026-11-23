import React, { useState } from 'react';
import { creatorProfile, collaborationTypes } from '../../data/portfolioData';

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [isStamping, setIsStamping] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: collaborationTypes[0],
    message: ''
  });

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsStamping(true);
    setTimeout(() => {
      setIsStamping(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        type: collaborationTypes[0],
        message: ''
      });
    }, 900);
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  return (
    <section className="space-y-space-md" id="contact">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <span
            className="material-symbols-outlined text-primary text-headline-sm"
            data-icon="mail"
          >
            mail
          </span>
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold">
            空中郵局・瓶中信
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Direct Air Post Desk &amp; Project Dispatch
        </p>
      </div>

      {/* Direct Contact Fast-Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* Phone Card with Copy Button & Tooltip Bubble */}
        <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest ink-border-heavy cel-shadow-sm">
          <a
            href={`tel:${creatorProfile.contact.phone}`}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ink-border-heavy text-primary group-hover:bg-[#F5C75B] transition-colors">
              <span className="material-symbols-outlined" data-icon="call">
                call
              </span>
            </div>
            <div>
              <span className="text-label-sm font-label-sm text-on-surface-variant block">
                專案熱線 (Hotline)
              </span>
              <span className="text-headline-sm font-headline-sm text-primary font-bold tracking-wider">
                {creatorProfile.contact.phone}
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => handleCopy(creatorProfile.contact.phone, 'phone')}
            className="px-3 py-1.5 rounded-lg bg-surface-container-high text-primary text-label-sm font-label-sm font-bold ink-border-heavy cel-shadow-sm cel-btn-active flex items-center space-x-1"
          >
            <span
              className="material-symbols-outlined text-xs"
              data-icon={copiedKey === 'phone' ? 'check' : 'content_copy'}
            >
              {copiedKey === 'phone' ? 'check' : 'content_copy'}
            </span>
            <span>{copiedKey === 'phone' ? '已複製' : '複製號碼'}</span>
          </button>

          {copiedKey === 'phone' && (
            <div className="absolute -top-8 right-2 bg-[#68B984] text-on-primary px-2.5 py-0.5 rounded-full ink-border-heavy cel-shadow-sm text-[11px] font-bold animate-bounce">
              已複製到剪貼簿！
            </div>
          )}
        </div>

        {/* Email Card with Copy Button & Tooltip Bubble */}
        <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest ink-border-heavy cel-shadow-sm">
          <a
            href={`mailto:${creatorProfile.contact.email}`}
            className="flex items-center space-x-3 overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ink-border-heavy text-primary shrink-0 group-hover:bg-[#E8F1F5] transition-colors">
              <span
                className="material-symbols-outlined"
                data-icon="alternate_email"
              >
                alternate_email
              </span>
            </div>
            <div className="truncate">
              <span className="text-label-sm font-label-sm text-on-surface-variant block">
                電子信箱 (Air Post Mail)
              </span>
              <span className="text-body-md font-body-md text-primary font-bold truncate block">
                {creatorProfile.contact.email}
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => handleCopy(creatorProfile.contact.email, 'email')}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container-high text-primary text-label-sm font-label-sm font-bold ink-border-heavy cel-shadow-sm cel-btn-active flex items-center space-x-1 ml-2"
          >
            <span
              className="material-symbols-outlined text-xs"
              data-icon={copiedKey === 'email' ? 'check' : 'content_copy'}
            >
              {copiedKey === 'email' ? 'check' : 'content_copy'}
            </span>
            <span>{copiedKey === 'email' ? '已複製' : '複製信箱'}</span>
          </button>

          {copiedKey === 'email' && (
            <div className="absolute -top-8 right-2 bg-[#68B984] text-on-primary px-2.5 py-0.5 rounded-full ink-border-heavy cel-shadow-sm text-[11px] font-bold animate-bounce">
              已複製到剪貼簿！
            </div>
          )}
        </div>
      </div>

      {/* Postcard Style Contact Form */}
      <form
        className="bg-surface-container-lowest rounded-2xl ink-border-heavy cel-shadow-lg p-space-md space-y-4 relative overflow-hidden"
        onSubmit={handleSubmit}
      >
        {/* Wax Seal Stamp Animation Overlay (PRD3 Module 5.2) */}
        {isStamping && (
          <div className="absolute inset-0 z-20 bg-surface-container-lowest/85 backdrop-blur-sm flex flex-col items-center justify-center space-y-2">
            <div className="w-20 h-20 rounded-full bg-[#93000a] text-on-error ink-border-heavy cel-shadow flex flex-col items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-3xl">
                verified
              </span>
              <span className="text-[10px] font-bold tracking-widest">
                封蠟蓋印
              </span>
            </div>
            <p className="text-label-md font-label-md font-bold text-primary">
              正在蓋上火漆印章並飛往雲端郵局...
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pb-2 border-b-[1.5px] border-primary/20">
          <div className="flex items-center space-x-1.5">
            <span
              className="material-symbols-outlined text-tertiary"
              data-icon="mark_email_read"
            >
              mark_email_read
            </span>
            <span className="text-label-lg font-label-lg text-primary font-bold">
              寄出一封空中信札
            </span>
          </div>
          {/* Japanese Stamp Motif */}
          <div className="w-12 h-14 rounded bg-[#E8F1F5] ink-border-heavy border-dashed flex flex-col items-center justify-center p-1 text-[9px] font-bold text-primary rotate-3">
            <span>航空便</span>
            <span className="text-[12px] font-serif">壹枚</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-label-sm font-label-sm text-primary font-bold mb-1">
                您的稱呼 (Your Name)
              </label>
              <input
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low ink-border-heavy text-body-sm font-body-sm text-primary focus:outline-none focus:ring-0 focus:border-secondary focus:shadow-[2px_2px_0px_0px_#0060ac]"
                placeholder="例：宮崎旅人 / 專案總監"
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-label-sm font-label-sm text-primary font-bold mb-1">
                您的聯絡信箱 (Email)
              </label>
              <input
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low ink-border-heavy text-body-sm font-body-sm text-primary focus:outline-none focus:ring-0 focus:border-secondary focus:shadow-[2px_2px_0px_0px_#0060ac]"
                placeholder="name@domain.com"
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-label-sm font-label-sm text-primary font-bold mb-1">
              合作類型 (Collaboration Type)
            </label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low ink-border-heavy text-body-sm font-body-sm text-primary focus:outline-none focus:ring-0 focus:border-secondary focus:shadow-[2px_2px_0px_0px_#0060ac]"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              {collaborationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-label-sm font-label-sm text-primary font-bold mb-1">
              信札內容 (Message Content)
            </label>
            <textarea
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low ink-border-heavy text-body-sm font-body-sm text-primary focus:outline-none focus:ring-0 focus:border-secondary focus:shadow-[2px_2px_0px_0px_#0060ac]"
              placeholder="請描述您的專案願景、時程或任何想與沛良探討的想法..."
              required
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        </div>

        <button
          className="w-full py-3.5 rounded-xl bg-[#F28C52] text-on-primary text-label-lg font-label-lg font-bold ink-border-heavy cel-shadow cel-btn-active flex items-center justify-center space-x-2 transition-transform hover:-translate-y-0.5"
          type="submit"
        >
          <span className="material-symbols-outlined text-lg" data-icon="send">
            send
          </span>
          <span>蓋印封蠟並寄出 (Dispatch Message)</span>
        </button>

        {submitSuccess && (
          <p
            className="text-center text-label-sm font-label-sm font-bold text-[#68B984] animate-bounce pt-1"
            id="submitSuccess"
          >
            ✓ 信札已蓋上火漆印章並成功送往雲端郵局（{creatorProfile.contact.email}）！沛良將盡快給予回覆。
          </p>
        )}
      </form>
    </section>
  );
}
