import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as ChevronLeft, D as ArrowLeft, E as ArrowRight, O as Activity, S as ChevronRight, T as ArrowUpRight, _ as Instagram, a as Star, b as Cpu, c as ShieldCheck, d as PhoneCall, f as Minus, g as Mail, h as MapPin, i as Stethoscope, l as Plus, m as Menu, n as Wallet, o as Sparkles, p as MessageSquare, r as Twitter, s as Smile, t as X, u as Phone, v as Gem, w as Bone, x as Clock, y as Facebook } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUdBAlZo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact({ services }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "reveal reveal-delay-800 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
					children: "Get in Touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl",
					children: ["Book your visit to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ember-grad-text",
						children: "Denta"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground",
					children: "Tell us a little about you and our front desk will reach out within the hour to confirm your appointment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-3",
					children: [
						{
							Icon: MapPin,
							text: "24 Carrer del Pi, Barcelona, Spain"
						},
						{
							Icon: Phone,
							text: "+34 932 000 121"
						},
						{
							Icon: Mail,
							text: "hello@denta.care"
						},
						{
							Icon: Clock,
							text: "Mon–Sat · 09:00 – 19:00"
						}
					].map(({ Icon, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `reveal reveal-delay-${(i + 1) * 100} flex items-center gap-3 rounded-2xl border border-border bg-card-gradient px-4 py-3 text-sm`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}), text]
					}, text))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					alert("Thanks! We'll be in touch shortly.");
				},
				className: "reveal reveal-delay-500 rounded-3xl border border-border bg-card-gradient p-6 shadow-card sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							name: "name",
							placeholder: "Jane Doe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							name: "phone",
							placeholder: "+34 ..."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							placeholder: "you@email.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
							children: "Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary",
							children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.title }, s.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							className: "mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary",
							placeholder: "Tell us what brings you in..."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110",
						children: ["Request Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		placeholder,
		className: "mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary"
	})] });
}
var MapSection = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#121212] text-white py-16 lg:py-24 border-t border-zinc-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-widest text-orange-500 uppercase px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full",
						children: "Our Location"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white",
						children: ["Visit Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-orange-500",
							children: "Studio."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-zinc-400",
						children: "We are conveniently located in the heart of the city. Stop by or get directions below."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 lg:col-span-1 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 bg-orange-500 rounded-xl text-white shrink-0 animate-pulse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-6 h-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-lg text-orange-500",
							children: "Emergency Available"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-zinc-300 font-medium",
							children: "24/7 Rapid Response Support"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl flex items-start gap-4 h-full justify-center flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 bg-orange-600/10 rounded-xl text-orange-500 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-6 h-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-xl text-white",
								children: "Working Hours"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full space-y-3 text-sm text-zinc-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pb-2 border-b border-zinc-800/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-zinc-300",
										children: "Mon – Fri"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-white",
										children: "09:00 – 19:00"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pb-2 border-b border-zinc-800/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-zinc-300",
										children: "Saturday"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-white",
										children: "10:00 – 16:00"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-zinc-500",
										children: "Sunday"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-zinc-500 line-through",
										children: "Closed"
									})]
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 w-full min-h-[350px] sm:min-h-[450px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Denta Premium Studio Map",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.441148116049!2d-74.00944718459226!3d40.71277597933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3163a7f2db%3A0xc90f12218f68c7c9!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1700000000000",
						width: "100%",
						height: "100%",
						style: {
							border: 0,
							filter: "grayscale(1) invert(0.9) contrast(1.2)"
						},
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "absolute inset-0 w-full h-full"
					})
				})]
			})]
		})
	});
};
var GALLERY_IMAGES = [
	{
		id: "case-1",
		tag: "Case 01",
		title: "Full Arch Contour",
		description: "Structural realignment displaying optimized tooth proportion and shade harmony.",
		imgSrc: "/assets/img-1-DboXt1eB.jfif"
	},
	{
		id: "case-2",
		tag: "Case 02",
		title: "Porcelain Veneers",
		description: "Minimal preparation cosmetic design creating perfectly symmetrical natural contours.",
		imgSrc: "/assets/img-2-6gaEb0gn.jfif"
	},
	{
		id: "case-3",
		tag: "Case 03",
		title: "Laser Whitening",
		description: "Advanced advanced enamel whitening safe therapy targeting deep internal stains.",
		imgSrc: "/assets/img-3-KREagz9s.jfif"
	},
	{
		id: "case-4",
		tag: "Case 04",
		title: "Composite Bonding",
		description: "Direct restorative layering addressing minor micro-fractures and surface textures.",
		imgSrc: "/assets/img-4-V5qrmz0Y.jfif"
	},
	{
		id: "case-5",
		tag: "Case 05",
		title: "Implant Restorations",
		description: "Precision engineered structural tooth replacement anchoring seamlessly along the gumline.",
		imgSrc: "/assets/img-5-KaEmCJqg.jfif"
	},
	{
		id: "case-6",
		tag: "Case 06",
		title: "Orthodontic Finishing",
		description: "Final post-alignment micro-abrasion detailing for a pristine vertical balance line.",
		imgSrc: "/assets/img-6-BGYWFpOa.jfif"
	}
];
var GallerySection = () => {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const nextSlide = () => {
		setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
	};
	const prevSlide = () => {
		setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "bg-[#121212] text-white py-16 lg:py-24 border-t border-zinc-800 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-semibold tracking-widest text-orange-500 uppercase px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Clinical Portfolio"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white",
							children: ["Smile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-orange-500",
								children: "Gallery."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-zinc-400",
							children: "Explore our curated gallery showcasing 6 custom aesthetic transformations and clinical results."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative max-w-5xl mx-auto min-h-[380px] sm:min-h-[480px] flex items-center justify-center my-8",
					children: GALLERY_IMAGES.map((item, index) => {
						let offset = index - activeIndex;
						if (offset < -1) offset += GALLERY_IMAGES.length;
						if (offset > 1) offset -= GALLERY_IMAGES.length;
						const isCenter = offset === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => !isCenter && setActiveIndex(index),
							className: `absolute w-full max-w-[280px] sm:max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer ${isCenter ? "z-30 scale-100 opacity-100 border-orange-500 shadow-[0_20px_50px_rgba(249,115,22,0.15)] pointer-events-auto" : offset === -1 ? "z-20 -translate-x-[40%] sm:-translate-x-[60%] scale-85 opacity-40 border-zinc-800 blur-[1px] hover:opacity-60" : offset === 1 ? "z-20 translate-x-[40%] sm:translate-x-[60%] scale-85 opacity-40 border-zinc-800 blur-[1px] hover:opacity-60" : "z-10 opacity-0 pointer-events-none scale-75"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.imgSrc,
								alt: item.title,
								className: "w-full h-full object-cover select-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-md text-xs font-semibold tracking-wider text-orange-400",
								children: item.tag
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl mx-auto text-center mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-[85px] mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-white tracking-wide transition-all duration-300",
							children: GALLERY_IMAGES[activeIndex].title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-zinc-400 leading-relaxed max-w-md mx-auto",
							children: GALLERY_IMAGES[activeIndex].description
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: prevSlide,
								className: "p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all active:scale-95",
								"aria-label": "Previous image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: GALLERY_IMAGES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									onClick: () => setActiveIndex(idx),
									className: `h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-6 bg-orange-500" : "w-1.5 bg-zinc-800 hover:bg-zinc-600"}`
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: nextSlide,
								className: "p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all active:scale-95",
								"aria-label": "Next image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })
							})
						]
					})]
				})
			]
		})
	});
};
var Preloader = () => {
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const handleLoad = () => {
			setTimeout(() => setLoading(false), 1800);
		};
		if (document.readyState === "complete") handleLoad();
		else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);
	if (!loading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#121212] select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-center justify-center w-24 h-24 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-orange-500/20 animate-ping opacity-75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-2 rounded-full border-2 border-t-orange-500 border-r-transparent border-b-zinc-800 border-l-transparent animate-spin",
					style: { animationDuration: "1.2s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 opacity-20 animate-pulse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-1 h-4 bg-orange-500 rounded-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-1 w-4 bg-orange-500 rounded-full" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl font-bold tracking-widest text-white uppercase sm:text-2xl",
					children: ["DENTA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-orange-500",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-32 h-[2px] bg-zinc-800 rounded-full mt-3 mx-auto overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-orange-500 rounded-full w-full origin-left animate-[loading-bar_1.5s_ease-in-out_infinite]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs font-medium tracking-wider text-zinc-500 uppercase",
					children: "Studio Loading"
				})
			]
		})]
	});
};
var hero_implant_default = "/assets/hero-implant-BevPgI0D.jpg";
var doctor_1_default = "/assets/doctor-1-CgJbSP56.jpg";
var doctor_2_default = "/assets/doctor-2-CEQIdBE3.jpg";
var doctor_3_default = "/assets/doctor-3-CjEGPrH4.jpg";
var doctor_4_default = "/assets/doctor-4-DkT9ihEL.jpg";
var services = [
	{
		icon: Stethoscope,
		title: "General Dentistry",
		desc: "Routine check-ups, cleanings, and family dental care."
	},
	{
		icon: Sparkles,
		title: "Teeth Whitening",
		desc: "Professional whitening that brightens up to 8 shades."
	},
	{
		icon: Bone,
		title: "Dental Implants",
		desc: "Titanium implants that restore function and confidence."
	},
	{
		icon: Activity,
		title: "Root Canal",
		desc: "Pain-free endodontic therapy with modern microscopy."
	},
	{
		icon: Smile,
		title: "Orthodontics",
		desc: "Clear aligners and braces for every age and budget."
	},
	{
		icon: Gem,
		title: "Cosmetic Dentistry",
		desc: "Veneers, bonding, and smile makeovers."
	}
];
var reasons = [
	{
		icon: ShieldCheck,
		title: "Experienced Doctors",
		desc: "Board-certified specialists with 10+ years of practice."
	},
	{
		icon: Cpu,
		title: "Latest Technology",
		desc: "Digital scans, 3D imaging, and laser dentistry."
	},
	{
		icon: Wallet,
		title: "Affordable Pricing",
		desc: "Transparent rates and flexible payment plans."
	},
	{
		icon: Phone,
		title: "Emergency Support",
		desc: "24/7 hotline for urgent dental emergencies."
	}
];
var doctors = [
	{
		img: doctor_1_default,
		name: "Dr. Clara Collins",
		role: "Implantologist",
		years: "12 yrs"
	},
	{
		img: doctor_2_default,
		name: "Dr. Mason Reid",
		role: "Orthodontist",
		years: "9 yrs"
	},
	{
		img: doctor_3_default,
		name: "Dr. Aiko Tanaka",
		role: "Cosmetic Dentist",
		years: "8 yrs"
	},
	{
		img: doctor_4_default,
		name: "Dr. Henry Vance",
		role: "Endodontist",
		years: "20 yrs"
	}
];
var testimonials = [
	{
		name: "Sofia M.",
		role: "Implant patient",
		text: "The team made my implant procedure feel effortless. My smile has never looked better.",
		rating: 5
	},
	{
		name: "Liam R.",
		role: "Whitening patient",
		text: "Modern, warm, and remarkably gentle. The whitening results blew me away.",
		rating: 5
	},
	{
		name: "Priya N.",
		role: "Family patient",
		text: "I finally found a dentist my kids actually look forward to visiting.",
		rating: 5
	}
];
var stats = [
	{
		value: "12K+",
		label: "Happy Patients"
	},
	{
		value: "18",
		label: "Years Experience"
	},
	{
		value: "26K+",
		label: "Treatments Completed"
	},
	{
		value: "24",
		label: "Expert Dentists"
	}
];
var faqs = [
	{
		q: "Do you accept dental insurance?",
		a: "Yes, we work with most major providers and offer in-house financing for uncovered procedures."
	},
	{
		q: "How often should I visit?",
		a: "We recommend a check-up and cleaning every six months for most patients."
	},
	{
		q: "Are implants painful?",
		a: "Procedures are performed under local anesthesia or sedation. Most patients report minimal discomfort."
	},
	{
		q: "Do you treat children?",
		a: "Absolutely — our pediatric team makes every visit fun, calm, and educational."
	}
];
function Landing() {
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .15 });
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctors, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { services }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
function WhatsAppButton() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const timeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setVisible(false);
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
			timeoutRef.current = window.setTimeout(() => setVisible(true), 300);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://wa.me/15550192834?text=Hello%20Denta%20team%2C%20I%20have%20a%20question",
		target: "_blank",
		rel: "noreferrer",
		className: `fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition-transform transition-opacity duration-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`,
		"aria-label": "Chat with us on WhatsApp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5" }), "WhatsApp"]
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 place-items-center rounded-xl bg-primary shadow-glow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "grid grid-cols-2 gap-[3px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl font-extrabold tracking-tight",
			children: "Denta"
		})]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		{
			href: "#services",
			label: "Services"
		},
		{
			href: "#gallery",
			label: "Gallery"
		},
		{
			href: "#doctors",
			label: "Doctors"
		},
		{
			href: "#why",
			label: "Why Us"
		},
		{
			href: "#faq",
			label: "FAQ"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		id: "top",
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-9 text-sm font-medium text-muted-foreground md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "transition-colors hover:text-primary",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 md:inline-flex",
					children: ["Book Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/60 bg-background/95 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-1 px-5 py-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					onClick: () => setOpen(false),
					href: l.href,
					className: "block rounded-xl px-3 py-3 text-sm hover:bg-surface",
					children: l.label
				}) }, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					onClick: () => setOpen(false),
					href: "#contact",
					className: "mt-2 block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground",
					children: "Book Visit"
				}) })]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "reveal reveal-delay-100 px-5 pt-10 pb-6 lg:px-8 lg:pt-20 lg:pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Premium Dental Studio"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl",
							children: ["Artistry in every ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ember-grad-text",
								children: "smile."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "From preventive care to complex restorations, we provide a comprehensive approach to your dental health using cutting-edge technology."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110",
								children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface",
								children: "Our Services"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl border border-border bg-card-gradient p-4 shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_implant_default,
								alt: "Modern dental implant rendering",
								width: 1024,
								height: 1024,
								className: "relative h-[360px] w-full rounded-2xl object-cover sm:h-[460px]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-4 flex items-center justify-between px-2 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
									children: "Featured"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-lg font-bold",
									children: "Titanium Implants"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
									children: "99% success"
								})]
							})
						]
					})
				})]
			})
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "reveal reveal-delay-200 mx-auto max-w-7xl px-5 pb-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 rounded-3xl border border-border bg-card-gradient p-7 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold",
						children: "Why patients choose Denta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "A team of highly skilled dentists using the latest medical advancements to ensure your comfort and care at every step."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-primary p-7 text-center shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl font-black text-white",
						children: "15+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85",
						children: "Years Experience"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-secondary/40 p-7 text-center shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl font-black",
						children: "4.9"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
						children: "Trust Score"
					})]
				})
			]
		})
	});
}
function SectionHeader({ kicker, title, sub, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl",
					children: title
				}),
				sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground sm:text-base",
					children: sub
				})
			]
		}), cta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: cta.href,
			className: "group inline-flex items-center gap-2 self-start text-sm font-bold text-primary md:self-end",
			children: [cta.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
		})]
	});
}
function Services() {
	const [first, second, third, fourth, fifth, sixth] = services;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "reveal reveal-delay-300 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			kicker: "Our Services",
			title: "Premium treatments, tailored to every smile",
			sub: "State-of-the-art treatments tailored to your unique needs.",
			cta: {
				href: "#contact",
				label: "Book a consult"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal reveal-delay-100 group relative overflow-hidden rounded-3xl border border-border bg-card-gradient p-8 md:col-span-2 md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(first.icon, { className: "h-7 w-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-7 font-display text-2xl font-bold sm:text-3xl",
								children: first.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md leading-relaxed text-muted-foreground",
								children: first.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary",
								children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					s: second,
					delay: "reveal-delay-200"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					s: third,
					delay: "reveal-delay-300"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					s: fourth,
					delay: "reveal-delay-100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal reveal-delay-200 relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl bg-primary p-8 shadow-glow md:col-span-2 md:flex-row md:items-center md:justify-between md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-white sm:text-3xl",
								children: "Ready for a dental consultation?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-white/85",
								children: "Join 12,000+ happy patients who found their perfect smile at Denta."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-background shadow-lg",
							children: ["Schedule Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-black/10" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					s: fifth,
					delay: "reveal-delay-200"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					s: sixth,
					delay: "reveal-delay-300"
				})
			]
		})]
	});
}
function ServiceCard({ s, delay = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `reveal ${delay} group rounded-3xl border border-border bg-card-gradient p-7 transition-all hover:-translate-y-1 hover:border-primary/50`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-xl font-bold",
				children: s.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: s.desc
			})
		]
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "reveal reveal-delay-400 border-y border-border bg-surface/30 py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Why Choose Us",
				title: "A practice built on trust, comfort and craft"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `reveal reveal-delay-${100 + i * 100} group rounded-3xl border border-border p-7 transition-all hover:-translate-y-1 hover:border-primary/50 ${i === 0 ? "bg-primary text-white shadow-glow" : "bg-card-gradient"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-11 w-11 place-items-center rounded-xl ${i === 0 ? "bg-white/15 text-white" : "bg-primary/10 text-primary"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-bold",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-muted-foreground"}`,
							children: r.desc
						})
					]
				}, r.title))
			})]
		})
	});
}
function Doctors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "doctors",
		className: "reveal reveal-delay-500 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			kicker: "Meet the Team",
			title: "Specialists who genuinely care",
			sub: "A team of dedicated experts committed to excellence."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: doctors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `reveal reveal-delay-${100 + i * 100} group overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.img,
							alt: d.name,
							width: 640,
							height: 800,
							loading: "lazy",
							className: "h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur",
							children: d.years
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: d.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
						children: d.role
					})]
				})]
			}, d.name))
		})]
	});
}
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const total = testimonials.length;
	const go = (n) => setI((n + total) % total);
	const next = () => go(i + 1);
	const prev = () => go(i - 1);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		const id = window.setInterval(() => setI((p) => (p + 1) % total), 5500);
		return () => window.clearInterval(id);
	}, [paused, total]);
	const touchX = (0, import_react.useRef)(null);
	const onTouchStart = (e) => {
		touchX.current = e.touches[0].clientX;
	};
	const onTouchEnd = (e) => {
		if (touchX.current === null) return;
		const dx = e.changedTouches[0].clientX - touchX.current;
		if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
		touchX.current = null;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "reveal reveal-delay-600 border-y border-border bg-surface/30 py-20 lg:py-28",
		"aria-roledescription": "carousel",
		"aria-label": "Patient testimonials",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onFocus: () => setPaused(true),
		onBlur: () => setPaused(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					kicker: "Patient Stories",
					title: "Loved by thousands of smiles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card",
					onTouchStart,
					onTouchEnd,
					onKeyDown: (e) => {
						if (e.key === "ArrowRight") next();
						else if (e.key === "ArrowLeft") prev();
					},
					tabIndex: 0,
					role: "group",
					"aria-roledescription": "slide",
					"aria-label": `${i + 1} of ${total}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex transition-transform duration-500 ease-out",
						style: { transform: `translateX(-${i * 100}%)` },
						"aria-live": paused ? "polite" : "off",
						children: testimonials.map((t, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full shrink-0 p-8 sm:p-14",
							"aria-hidden": k !== i,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1",
									children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" }, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 font-display text-2xl font-bold leading-snug text-balance sm:text-3xl",
									children: [
										"\"",
										t.text,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-base font-bold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: t.role
									})] })
								})
							]
						}, k))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prev,
							className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
							"aria-label": "Previous testimonial",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							role: "tablist",
							"aria-label": "Select testimonial",
							children: testimonials.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(k),
								role: "tab",
								"aria-selected": k === i,
								"aria-label": `Go to testimonial ${k + 1}`,
								className: `h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${k === i ? "w-6 bg-primary" : "w-1.5 bg-border"}`
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							className: "grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-glow transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
							"aria-label": "Next testimonial",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card-gradient p-6 sm:grid-cols-4 sm:p-8",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `reveal reveal-delay-${100 + i * 100} text-center`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-black ember-grad-text sm:text-5xl",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})
			]
		})
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "reveal reveal-delay-700 mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			kicker: "FAQ",
			title: "Questions, answered"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 space-y-3",
			children: faqs.map((f, k) => {
				const isOpen = open === k;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `reveal reveal-delay-${100 + k * 100} overflow-hidden rounded-2xl border border-border bg-card-gradient transition-colors hover:border-primary/40`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : k),
						className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
						"aria-expanded": isOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
						})]
					}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-6 pb-6 text-sm leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q);
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "reveal reveal-delay-900 border-t border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Redefining the dental experience through clinical excellence and a human-centric approach to modern dentistry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-3",
							children: [
								Instagram,
								Twitter,
								Facebook
							].map((Icon, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary",
								"aria-label": "Social",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, k))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xs font-bold uppercase tracking-[0.22em] text-foreground/80",
					children: "Clinic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3 text-sm text-muted-foreground",
					children: services.slice(0, 5).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "transition-colors hover:text-primary",
						children: s.title
					}) }, s.title))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xs font-bold uppercase tracking-[0.22em] text-foreground/80",
					children: "Working Hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mon – Fri · 09:00 – 19:00" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Saturday · 10:00 – 16:00" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sunday · Closed" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-primary",
							children: "Emergency · 24/7"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Denta Dental Group. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "transition-colors hover:text-foreground",
						children: "Terms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "transition-colors hover:text-foreground",
						children: "Privacy"
					})]
				})]
			})
		})]
	});
}
//#endregion
export { Landing as component };
