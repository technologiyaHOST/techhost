import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivacyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Learn how TechHost protects your data and privacy."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-10">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  1. Information We Collect
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.
                </p>
                
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  2. Use of Information
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  We may use the information we collect about you to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request, develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages.
                </p>
                
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  3. Sharing of Information
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
