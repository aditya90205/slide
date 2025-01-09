import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="space-y-6">
          <h2 className="text-xl font-bold">
            Web Site Terms and Conditions of Use
          </h2>
          <h3 className="text-lg font-semibold">1. Terms</h3>
          <p>
            By accessing this web site, you are agreeing to be bound by these
            web site Terms and Conditions of Use, applicable laws and
            regulations and their compliance. If you disagree with any of the
            stated terms and conditions, you are prohibited from using or
            accessing this site. The materials contained in this site are
            secured by relevant copyright and trade mark law.
          </p>

          <h3 className="text-lg font-semibold">2. Use License</h3>
          <p>
            Permission is allowed to temporarily download one duplicate of the
            materials (data or programming) on Slide's site for individual and
            non-business use only. This is just a permit of license and not an
            exchange of title, and under this permit you may not:
          </p>
          <ul className="list-disc ml-6">
            <li>Modify or copy the materials;</li>
            <li>
              Use the materials for any commercial use, or for any public
              presentation (business or non-business);
            </li>
            <li>
              Attempt to decompile or rebuild any product or material contained
              on Slide's site;
            </li>
            <li>
              Remove any copyright or other restrictive documentations from the
              materials; or
            </li>
            <li>
              Transfer the materials to someone else or even "mirror" the
              materials on another server.
            </li>
          </ul>
          <p>
            This permit might consequently be terminated if you disregard any of
            these confinements and may be ended by Slide whenever deemed. After
            permit termination or when your viewing permit is terminated, you
            must destroy any downloaded materials in your possession whether in
            electronic or printed form.
          </p>

          <h3 className="text-lg font-semibold">3. Disclaimer</h3>
          <p>
            The materials on Slide's site are given "as is". Slide makes no
            guarantees, communicated or suggested, and thus renounces and
            nullifies every single other warranty, including without impediment,
            inferred guarantees or states of merchantability, fitness for a
            specific reason, or non-encroachment of licensed property or other
            infringement of rights. Further, Slide does not warrant or make any
            representations concerning the precision, likely results, or
            unwavering quality of the utilization of the materials on its
            Internet site or generally identifying with such materials or on any
            sites connected to this website.
          </p>

          {/* Repeat for other sections */}
          <h3 className="text-lg font-semibold">8. Governing Law</h3>
          <p>
            Any case identifying with Slide's site should be administered by the
            laws of the country of India Slide State without respect to its
            contention of law provisions.
          </p>
          <p>General Terms and Conditions applicable to Use of a Web Site.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
