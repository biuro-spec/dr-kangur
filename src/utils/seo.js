import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const updateMetaTag = (name, content, attr = 'name') => {
    let element = document.querySelector(`meta[${attr}="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

export const updateMetaTags = ({ title, description, keywords, slug, type = 'website' }) => {
    document.title = title;
    if (description) updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', title, 'property');
    if (description) updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', type, 'property');
    if (slug) updateMetaTag('og:url', `https://drkangur.pl/blog/${slug}`, 'property');
};

export const resetMetaTags = () => {
    document.title = 'DR KANGUR | Rehabilitacja i Fizjoterapia Głubczyce';
    updateMetaTag('description', 'DR KANGUR - Profesjonalna rehabilitacja i fizjoterapia w Głubczycach. NFZ i prywatnie. Powrót do sprawności po urazach i operacjach.');
    updateMetaTag('og:title', 'DR KANGUR | Rehabilitacja i Fizjoterapia Głubczyce', 'property');
    updateMetaTag('og:type', 'website', 'property');
};

export const generateArticleSchema = (article) => ({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": article.title,
    "description": article.metaDescription,
    "datePublished": article.publishDate,
    "author": { "@type": "Organization", "name": "DR KANGUR Rehabilitacja i Fizjoterapia" },
    "publisher": {
        "@type": "Organization",
        "name": "DR KANGUR Rehabilitacja i Fizjoterapia",
        "logo": { "@type": "ImageObject", "url": "https://drkangur.pl/dr_kangur_logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://drkangur.pl/blog/${article.slug}` },
    "keywords": article.keywords.join(', '),
    "specialty": "Rehabilitation Medicine"
});

export const injectSchema = (schema) => {
    let script = document.getElementById('article-schema');
    if (!script) {
        script = document.createElement('script');
        script.id = 'article-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
};

export const removeSchema = () => {
    const script = document.getElementById('article-schema');
    if (script) script.remove();
};

export const useScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            // Wait for DOM to render, then scroll to the hash element
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
};

export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const slugify = (text) =>
    text.toLowerCase()
        .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
        .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o')
        .replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z')
        .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
