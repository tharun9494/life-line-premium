import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "G Riyaz", stars: 5, text: "A lot of thanks to sir — he is the best doctor in Tirupati! Patient, attentive, and the surgery went smoothly." },
  { name: "Banu Harshavardhan", stars: 4, text: "Caring and professional team. The hospital is clean and the staff explained everything clearly." },
  { name: "Patient Family", stars: 5, text: "Dr. Reddy's calm explanation made a stressful diagnosis manageable. Forever grateful." },
  { name: "Anonymous", stars: 4, text: "24/7 service was a lifesaver during a midnight emergency. Quick response and skilled care." },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < count ? "fill-accent text-accent" : "text-muted"}`} />
    ))}
  </div>
);

export const Reviews = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-secondary/60">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">Patient Stories</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">Trusted by families across Tirupati</h2>
          </div>
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-card shadow-soft border border-border/60 self-start md:self-end">
            <Stars count={4} />
            <span className="text-xs sm:text-sm font-semibold text-primary">4.0 · 17 Reviews</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 sm:gap-6 w-max">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="card-lift snap-start bg-card rounded-2xl p-6 sm:p-8 border border-border/60 w-[280px] sm:w-[380px] shrink-0 relative"
              >
                <Quote className="w-9 h-9 sm:w-10 sm:h-10 text-accent/30 absolute top-5 right-5 sm:top-6 sm:right-6" />
                <Stars count={r.stars} />
                <p className="mt-4 sm:mt-5 text-foreground/85 leading-relaxed text-[14px] sm:text-[15px]">"{r.text}"</p>
                <div className="mt-6 sm:mt-7 flex items-center gap-3 pt-4 sm:pt-5 border-t border-border/60">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-teal text-primary-foreground grid place-items-center font-display font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm sm:text-base">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Verified patient</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-2 text-center text-xs text-muted-foreground sm:hidden">← swipe to see more →</div>
      </div>
    </section>
  );
};

export default Reviews;
