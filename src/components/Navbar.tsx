import { Logo } from "./Logo"
import { PagesList, type Page } from "./PagesList"

const pages: Page[] = [
    { name: "Login", address: "https://www.mercadolivre.com.br/carretilha-daiwa-tatula-tw-100xh-811-direita-195g-aluminio-preto/p/MLB44381460?product_trigger_id=MLB44134240&pdp_filters=item_id%3AMLB6935853480&applied_product_filters=MLB44381460&from=gshop&picker=true&matt_tool=63319127&matt_word=&matt_source=google&matt_campaign_id=22090193885&matt_ad_group_id=194474628674&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355615833&matt_keyword=&matt_ad_position=&matt_ad_type=pla_with_promotion&matt_merchant_id=735098639&matt_product_id=MLB44381460-product&matt_product_partition_id=2496374182008&matt_target_id=aud-2487237563667%3Apla-2496374182008&cq_src=google_ads&cq_cmp=22090193885&cq_net=g&cq_plt=gp&cq_med=pla_with_promotion&gad_source=4&gad_campaignid=22090193885&gclid=Cj0KCQjw6ObWBhDDARIsAFdfcUjkutb-GaU0PsjshJvZaFTHoNObh_5jt38y-BLjBnVne6GYpp3YvkkaAukkEALw_wcB&quantity=1" },
    { name: "Cadastro", address: "https://www.clarotvmais.com.br/home-landing" }
];

export function Navbar() {
    return (
        <nav className="flex flex-row gap-3 justify-between p-5 bg-gray-300 w-full h-[64px]">
            <Logo></Logo>
            <PagesList pages={pages}></PagesList>
        </nav>
    );
}
