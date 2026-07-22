import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as CircleCheck, a as Truck, b as Boxes, c as ShieldCheck, d as Minus, f as Menu, g as Clock3, h as FileCheckCorner, i as UserCheck, l as Plus, m as Layers, n as Warehouse, o as TrendingUp, p as LoaderCircle, r as UtensilsCrossed, s as Store, t as X, u as PackageCheck, v as ChefHat, x as ArrowRight, y as Check } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvbikjGL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_dishes_default = "/assets/hero-dishes-Cryt3qfV.jpg";
var warehouse_default = "/assets/warehouse-B7Xl9TmY.jpg";
function TradeForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("loading");
		await new Promise((r) => setTimeout(r, 900));
		setStatus("done");
	}
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-black/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "mx-auto h-14 w-14 text-orange-cta",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-2xl font-bold text-plum",
				children: "Application received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "A named account manager will be in touch within 24 business hours with your full price list."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap gap-4 text-xs font-medium text-plum",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
							className: "h-4 w-4 text-orange-cta",
							"aria-hidden": true
						}), " Reviewed within 24 business hours"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "h-4 w-4 text-orange-cta",
							"aria-hidden": true
						}), " Strictly trade only"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, {
							className: "h-4 w-4 text-orange-cta",
							"aria-hidden": true
						}), " Full price list sent on approval"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business Name",
						name: "business",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Contact Person",
						name: "contact",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business Email",
						name: "email",
						type: "email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone Number",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 text-sm font-semibold text-plum",
							children: "Business Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "type",
							required: true,
							className: "h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-orange-cta focus:ring-2 focus:ring-orange-cta/30",
							defaultValue: "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Retail / Convenience" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cash & Carry / Wholesale" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Restaurant / Takeaway" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Caterer / Foodservice" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "UK Postcode",
						name: "postcode",
						required: true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "loading",
				className: "btn-cta mt-6 w-full py-4 text-base disabled:opacity-70",
				children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "h-5 w-5 animate-spin",
					"aria-hidden": true
				}), " Submitting…"] }) : "Submit Application"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted-foreground",
				children: "By submitting, you consent to Tiger Tiger Foods and our distribution partner JK Foods contacting you about trade pricing. We never share your details with third parties."
			})
		]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "mb-1.5 text-sm font-semibold text-plum",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			required,
			className: "h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-orange-cta focus:ring-2 focus:ring-orange-cta/30"
		})]
	});
}
var faqs = [
	{
		q: "What are your minimum order quantities?",
		a: "MOQs start from a single mixed pallet across our range, with case-level top-ups on repeat orders. Wholesale and foodservice accounts get bespoke MOQs after approval."
	},
	{
		q: "How fast is UK delivery?",
		a: "Standard 48–72 hour nationwide delivery from UK-held stock via our JK Foods distribution network. Named-day slots available for account holders."
	},
	{
		q: "How does trade pricing work?",
		a: "Once your trade application is approved, you receive a full price list scaled to your channel — retail, wholesale, or foodservice — with volume tiers."
	},
	{
		q: "How long does the application process take?",
		a: "Applications are reviewed within 24 business hours. We verify trade status, assign an account manager, and send pricing plus a starter order form."
	}
];
function FAQAccordion() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border rounded-2xl bg-white ring-1 ring-black/5",
		children: faqs.map((f, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				itemScope: true,
				itemProp: "mainEntity",
				itemType: "https://schema.org/Question",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(isOpen ? null : i),
					"aria-expanded": isOpen,
					className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						itemProp: "name",
						className: "text-base font-semibold text-plum sm:text-lg",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum text-white",
						children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
							className: "h-4 w-4",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": true
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					itemScope: true,
					itemProp: "acceptedAnswer",
					itemType: "https://schema.org/Answer",
					className: `grid overflow-hidden px-6 transition-[grid-template-rows,padding] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						itemProp: "text",
						className: "min-h-0 text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: f.a
					})
				})]
			}, f.q);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.a
				}
			}))
		}) }
	})] });
}
var items = [
	{
		title: "Curry Pastes & Cooking Sauces",
		tag: "Signature range",
		img: "/assets/cat-curry-DYu-qh2U.jpg"
	},
	{
		title: "Noodles & Rice",
		tag: "Wow Chow Range",
		img: "/assets/cat-noodles-D7W1FFj1.jpg"
	},
	{
		title: "Coconut & Kitchen Basics",
		tag: "Everyday essentials",
		img: "/assets/cat-coconut-CR2iGG01.jpg"
	},
	{
		title: "Snacks, Drinks & Sides",
		tag: "Front-of-house",
		img: "/assets/cat-snacks-XcQWpLQ6.jpg"
	}
];
function ProductCarousel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			initial: {
				opacity: 0,
				y: 24
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: {
				duration: .5,
				delay: i * .08
			},
			className: "group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square overflow-hidden bg-plum/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: it.img,
					alt: it.title,
					width: 800,
					height: 800,
					loading: "lazy",
					decoding: "async",
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-orange-cta",
					children: it.tag
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1.5 text-lg font-bold text-plum",
					children: it.title
				})]
			})]
		}, it.title))
	});
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
var links = [
	{
		href: "#why",
		label: "Why Stock Us"
	},
	{
		href: "#range",
		label: "Product Range"
	},
	{
		href: "#sectors",
		label: "Sectors"
	},
	{
		href: "#distribution",
		label: "Distribution"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
function MobileNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Open navigation",
		onClick: () => setOpen(true),
		className: "inline-flex h-10 w-10 items-center justify-center rounded-lg text-amber-500 hover:bg-amber-500/10 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			className: "h-6 w-6",
			"aria-hidden": true
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 top-0 h-full w-80 p-6 text-white flex flex-col items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end w-full pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close navigation",
					onClick: () => setOpen(false),
					className: "inline-flex h-10 w-10 items-center justify-center rounded-lg text-amber-500 hover:bg-white/10 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "h-7 w-7",
						"aria-hidden": true
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "w-full flex flex-col bg-neutral-950 p-4 rounded-3xl border border-amber-500/20 shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col w-full",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "block px-4 py-3.5 text-base font-semibold text-white transition hover:text-amber-400 hover:bg-amber-500/10 border-b border-amber-500/15 rounded-lg",
						children: l.label
					}) }, l.href))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#apply",
					onClick: () => setOpen(false),
					className: "mt-6 w-full text-center rounded-xl bg-amber-500 px-4 py-3.5 text-base font-bold text-black transition hover:bg-amber-400 shadow-md shadow-amber-500/20",
					children: "Apply for a Trade Account"
				})]
			})]
		})]
	})] });
}
var values = [
	{
		icon: TrendingUp,
		title: "Margins Worth the Shelf Space",
		body: "Trade pricing engineered for real-world channel margins — priced to move at retail, priced to plate at foodservice."
	},
	{
		icon: ChefHat,
		title: "Proper Recipes, Full Strength",
		body: "Authentic Pan-Asian formulations built by our development kitchen — no watered-down flavour, no apologies."
	},
	{
		icon: ShieldCheck,
		title: "Supply You Can Plan Around",
		body: "UK-held stock and named account managers mean you forecast once and get what you ordered, on time."
	},
	{
		icon: Layers,
		title: "One Brand, Every Size",
		body: "Retail jars to caterer tubs across the same recipes. Menu consistency from prep bench to takeaway shelf."
	}
];
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-plum text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-7xl px-4 py-2.5 text-center text-xs font-medium tracking-wide sm:text-sm",
					children: "The UK's leading developer of authentic Pan-Asian cuisine."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.avif",
								alt: "Tiger Tiger",
								className: "h-12 w-auto"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 md:flex",
							"aria-label": "Primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#why",
									className: "text-sm font-semibold text-plum hover:text-orange-cta",
									children: "Why Stock Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#range",
									className: "text-sm font-semibold text-plum hover:text-orange-cta",
									children: "Product Range"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#sectors",
									className: "text-sm font-semibold text-plum hover:text-orange-cta",
									children: "Sectors"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#distribution",
									className: "text-sm font-semibold text-plum hover:text-orange-cta",
									children: "Distribution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									className: "text-sm font-semibold text-plum hover:text-orange-cta",
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#apply",
								className: "btn-cta hidden text-sm md:inline-flex",
								children: "Apply for a Trade Account"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-gradient-to-br from-plum via-plum-dark to-crimson text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-cta/20 blur-3xl",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-orange-cta" }), " UK Trade Only"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
									children: [
										"Sell the Asian Flavours",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-orange-cta",
											children: "Britain Actually Wants"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg",
									children: "Authentic Pan-Asian recipes at trade pricing, distributed nationwide across the UK from our own warehouses. Retail, wholesale, restaurants and caterers — one range, every channel."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#apply",
										className: "btn-cta text-base",
										children: ["Apply for a Trade Account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "h-5 w-5",
											"aria-hidden": true
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#range",
										className: "text-sm font-semibold text-white/90 underline-offset-4 hover:text-orange-cta hover:underline",
										children: "See the Full Range →"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-10 grid grid-cols-2 gap-4 sm:max-w-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-white/15 bg-white/5 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
											className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-cta",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {
												className: "h-4 w-4",
												"aria-hidden": true
											}), " Delivery"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-lg font-bold",
											children: "48–72 hour UK"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-white/15 bg-white/5 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
											className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-cta",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
												className: "h-4 w-4",
												"aria-hidden": true
											}), " Orders"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-lg font-bold",
											children: "Low minimums"
										})]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 -rotate-2 rounded-3xl bg-orange-cta/30 blur-2xl",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_dishes_default,
								alt: "Premium Pan-Asian dishes — Thai green curry, stir-fried noodles, jasmine rice with curry paste and coconut milk",
								width: 1280,
								height: 1280,
								fetchPriority: "high",
								decoding: "async",
								className: "relative aspect-square w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "why",
					className: "bg-offwhite py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase tracking-wider text-orange-cta",
								children: "Why buyers keep us in the range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-black text-plum sm:text-4xl",
								children: "Four Reasons Buyers Keep Us on the Order Sheet"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2",
							children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "group h-full rounded-2xl border-t-4 border-plum bg-white p-8 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-plum/10 text-plum transition group-hover:bg-orange-cta group-hover:text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, {
												className: "h-6 w-6",
												"aria-hidden": true
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 text-xl font-bold text-plum",
											children: v.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base",
											children: v.body
										})
									]
								})
							}, v.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "range",
					className: "py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold uppercase tracking-wider text-orange-cta",
									children: "The Range"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-black text-plum sm:text-4xl",
									children: "A Range Wide Enough to Cover the Whole Menu"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#apply",
								className: "btn-ghost-plum text-sm",
								children: ["Request full catalogue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-4 w-4",
									"aria-hidden": true
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCarousel, {})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "sectors",
					className: "bg-offwhite py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase tracking-wider text-orange-cta",
								children: "Sectors"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-black text-plum sm:text-4xl",
								children: "Built for Your Side of the Trade"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2",
							children: [{
								icon: Store,
								eyebrow: "Wholesale",
								title: "Retail, Cash & Carry, Convenience",
								body: "Rate-of-sale winners at every price point — jars, pouches and pack sizes buyers reorder without prompting.",
								cta: "Open a Wholesale Account"
							}, {
								icon: UtensilsCrossed,
								eyebrow: "Foodservice",
								title: "Restaurants, Takeaways, Caterers",
								body: "Kitchen-grade tubs, consistent recipes and stable pricing your development chef can actually build a menu on.",
								cta: "Open a Foodservice Account"
							}].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-plum p-8 text-white shadow-xl sm:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-cta/20 blur-3xl transition group-hover:bg-orange-cta/30",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-cta",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
													className: "h-7 w-7",
													"aria-hidden": true
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-6 text-xs font-bold uppercase tracking-wider text-orange-cta",
												children: s.eyebrow
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 text-2xl font-black sm:text-3xl",
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-white/80",
												children: s.body
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#apply",
												className: "btn-cta mt-8 self-start",
												children: [
													s.cta,
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
														className: "h-4 w-4",
														"aria-hidden": true
													})
												]
											})
										]
									})]
								})
							}, s.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "distribution",
					className: "py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: warehouse_default,
							alt: "Tiger Tiger Foods UK distribution warehouse operated by JK Foods",
							width: 1280,
							height: 960,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/3] w-full rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .1,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold uppercase tracking-wider text-orange-cta",
									children: "Distribution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-black text-plum sm:text-4xl",
									children: "UK-Held Stock, Backed by JK Foods"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
									children: "Every SKU is warehoused in the UK by our distribution partner JK Foods and shipped on your named account manager's watch — not a call centre."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 space-y-3",
									children: [
										{
											icon: Warehouse,
											text: "UK-warehoused inventory across the full trade range"
										},
										{
											icon: Truck,
											text: "48–72 hour nationwide delivery, named-day slots on request"
										},
										{
											icon: UserCheck,
											text: "Named account manager, not a shared inbox"
										},
										{
											icon: Boxes,
											text: "Mixed pallets and case-level top-ups on repeat orders"
										}
									].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-cta text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-4 w-4",
												"aria-hidden": true
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-foreground sm:text-base",
											children: b.text
										})]
									}, b.text))
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "apply",
					className: "relative overflow-hidden bg-gradient-to-br from-plum-dark via-plum to-crimson py-20 sm:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-30",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-orange-cta/40 blur-3xl" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2 lg:pt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold uppercase tracking-wider text-orange-cta",
									children: "Trade Registration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-black leading-tight text-white sm:text-4xl",
									children: "Open Your Trade Account Today"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-white/85",
									children: "One short application. A named account manager gets back to you within one working day with your full price list, MOQs and starter order form."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-2 text-sm text-white/85",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-4 w-4 text-orange-cta",
												"aria-hidden": true
											}), " No sign-up fee, no minimum contract"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-4 w-4 text-orange-cta",
												"aria-hidden": true
											}), " Strictly UK trade — not open to consumers"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-4 w-4 text-orange-cta",
												"aria-hidden": true
											}), " Full catalogue and price list on approval"]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeForm, {})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "faq",
					className: "bg-offwhite py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase tracking-wider text-orange-cta",
								children: "FAQ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-black text-plum sm:text-4xl",
								children: "Trade Questions, Answered Plainly"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {})
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-ink py-14 text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 text-center sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex flex-col items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.avif",
								alt: "Tiger Tiger",
								className: "h-12 w-auto"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-sm",
							children: "Tiger Tiger Foods trade programme. UK distribution supported by JK Foods."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-xs text-white/50",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Tiger Tiger Foods.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.tigertigerfoods.com",
									target: "_blank",
									rel: "noreferrer noopener",
									className: "text-orange-cta hover:underline",
									children: "Official Website ↗"
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { LandingPage as component };
