// Texte aus der alten Datenschutzerklärung (ohne den nicht mehr zutreffenden Google-Fonts-Abschnitt)
import type { Lang } from './translations.ts';

export type Inline = string | (string | { href: string; label: string })[];

export type Block =
  | { type: 'h2' | 'h3'; text: string }
  | { type: 'p' | 'small'; text: Inline }
  | { type: 'ul'; items: string[] }
  | { type: 'address' };

export const datenschutz: Record<Lang, { title: string; blocks: Block[] }> = {
  de: {
    title: 'Datenschutzerklärung',
    blocks: [
      {
        type: 'p',
        text: 'Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:',
      },
      {
        type: 'address',
      },
      {
        type: 'h2',
        text: 'Ihre Betroffenenrechte',
      },
      {
        type: 'p',
        text: 'Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:',
      },
      {
        type: 'ul',
        items: [
          'Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),',
          'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),',
          'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),',
          'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),',
          'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und',
          'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).',
        ],
      },
      {
        type: 'p',
        text: 'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
      },
      {
        type: 'p',
        text: 'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
      },
      {
        type: 'p',
        text: [
          'Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: ',
          {
            href: 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html',
            label: 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html',
          },
          '.',
        ],
      },
      {
        type: 'h2',
        text: 'Erfassung allgemeiner Informationen beim Besuch unserer Website',
      },
      {
        type: 'h3',
        text: 'Art und Zweck der Verarbeitung:',
      },
      {
        type: 'p',
        text: 'Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.',
      },
      {
        type: 'p',
        text: 'Sie werden insbesondere zu folgenden Zwecken verarbeitet:',
      },
      {
        type: 'ul',
        items: [
          'Sicherstellung eines problemlosen Verbindungsaufbaus der Website,',
          'Sicherstellung einer reibungslosen Nutzung unserer Website,',
          'Auswertung der Systemsicherheit und -stabilität sowie',
          'zur Optimierung unserer Website.',
        ],
      },
      {
        type: 'p',
        text: 'Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.',
      },
      {
        type: 'h3',
        text: 'Rechtsgrundlage und berechtigtes Interesse:',
      },
      {
        type: 'p',
        text: 'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.',
      },
      {
        type: 'h3',
        text: 'Empfänger:',
      },
      {
        type: 'p',
        text: 'Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.',
      },
      {
        type: 'h3',
        text: 'Speicherdauer:',
      },
      {
        type: 'p',
        text: 'Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.',
      },
      {
        type: 'p',
        text: 'Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.',
      },
      {
        type: 'h3',
        text: 'Bereitstellung vorgeschrieben oder erforderlich:',
      },
      {
        type: 'p',
        text: 'Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.',
      },
      {
        type: 'h2',
        text: 'Kontaktformular',
      },
      {
        type: 'h3',
        text: 'Art und Zweck der Verarbeitung:',
      },
      {
        type: 'p',
        text: 'Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.',
      },
      {
        type: 'h3',
        text: 'Rechtsgrundlage:',
      },
      {
        type: 'p',
        text: 'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).',
      },
      {
        type: 'p',
        text: 'Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.',
      },
      {
        type: 'p',
        text: 'Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).',
      },
      {
        type: 'h3',
        text: 'Empfänger:',
      },
      {
        type: 'p',
        text: 'Empfänger der Daten sind ggf. Auftragsverarbeiter.',
      },
      {
        type: 'h3',
        text: 'Speicherdauer:',
      },
      {
        type: 'p',
        text: 'Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.',
      },
      {
        type: 'p',
        text: 'Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.',
      },
      {
        type: 'h3',
        text: 'Bereitstellung vorgeschrieben oder erforderlich:',
      },
      {
        type: 'p',
        text: 'Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.',
      },
      {
        type: 'h2',
        text: 'SSL-Verschlüsselung',
      },
      {
        type: 'p',
        text: 'Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.',
      },
      {
        type: 'h2',
        text: 'Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO',
      },
      {
        type: 'h3',
        text: 'Einzelfallbezogenes Widerspruchsrecht',
      },
      {
        type: 'p',
        text: 'Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.',
      },
      {
        type: 'p',
        text: 'Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
      },
      {
        type: 'h3',
        text: 'Empfänger eines Widerspruchs',
      },
      {
        type: 'address',
      },
      {
        type: 'h2',
        text: 'Änderung unserer Datenschutzbestimmungen',
      },
      {
        type: 'p',
        text: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',
      },
      {
        type: 'h2',
        text: 'Fragen an den Datenschutzbeauftragten',
      },
      {
        type: 'p',
        text: 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:',
      },
      {
        type: 'address',
      },
      {
        type: 'small',
        text: [
          'Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für ',
          {
            href: 'https://www.activemind.de/datenschutz/datenschutzbeauftragter/',
            label: 'externe Datenschutzbeauftragte',
          },
          ' (Version #2020-09-30).',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    blocks: [
      {
        type: 'p',
        text: 'The controller within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:',
      },
      {
        type: 'address',
      },
      {
        type: 'h2',
        text: 'Your Rights as a Data Subject',
      },
      {
        type: 'p',
        text: 'Under the specified contact details of our data protection officer, you can exercise the following rights at any time:',
      },
      {
        type: 'ul',
        items: [
          'Information about your data stored by us and its processing (Art. 15 GDPR),',
          'Correction of incorrect personal data (Art. 16 GDPR),',
          'Deletion of your data stored by us (Art. 17 GDPR),',
          'Restriction of data processing, provided we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR),',
          'Objection to the processing of your data by us (Art. 21 GDPR) and',
          'Data portability, provided you have consented to data processing or have entered into a contract with us (Art. 20 GDPR).',
        ],
      },
      {
        type: 'p',
        text: 'If you have given us your consent, you can revoke it at any time with effect for the future.',
      },
      {
        type: 'p',
        text: 'You can always complain to a supervisory authority, e.g. to the competent supervisory authority of your state of residence or the authority responsible for us.',
      },
      {
        type: 'p',
        text: [
          'A list of supervisory authorities with their addresses can be found at: ',
          {
            href: 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html',
            label: 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html',
          },
          '.',
        ],
      },
      {
        type: 'h2',
        text: 'Collection of General Information When Visiting Our Website',
      },
      {
        type: 'h3',
        text: 'Nature and Purpose of Processing:',
      },
      {
        type: 'p',
        text: 'When you access our website, i.e., if you do not register or otherwise submit information, information of a general nature is automatically collected. This information (server log files) includes, for example, the type of web browser, the operating system used, the domain name of your Internet service provider, your IP address, and similar information.',
      },
      {
        type: 'p',
        text: 'They are processed in particular for the following purposes:',
      },
      {
        type: 'ul',
        items: [
          'Ensuring a problem-free connection of the website,',
          'Ensuring smooth use of our website,',
          'Evaluating system security and stability as well as',
          'For optimizing our website.',
        ],
      },
      {
        type: 'p',
        text: 'We do not use your data to draw conclusions about your person. Information of this kind is occasionally statistically evaluated by us anonymously to optimize our website and the underlying technology.',
      },
      {
        type: 'h3',
        text: 'Legal Basis and Legitimate Interest:',
      },
      {
        type: 'p',
        text: 'Processing is carried out in accordance with Art. 6 Para. 1 lit. f GDPR on the basis of our legitimate interest in improving the stability and functionality of our website.',
      },
      {
        type: 'h3',
        text: 'Recipients:',
      },
      {
        type: 'p',
        text: 'Recipients of the data may be technical service providers who act as data processors for the operation and maintenance of our website.',
      },
      {
        type: 'h3',
        text: 'Storage Period:',
      },
      {
        type: 'p',
        text: 'The data gets deleted as soon as it is no longer required for the purpose of collection. This is generally the case for data serving the provision of the website when the respective session has ended.',
      },
      {
        type: 'p',
        text: 'In the case of storing the data in log files, this is the case after 14 days at the latest. Storage beyond this is possible. In this case, the IP addresses of the users are anonymized so that an assignment of the calling client is no longer possible.',
      },
      {
        type: 'h3',
        text: 'Provision Required or Required:',
      },
      {
        type: 'p',
        text: 'The provision of the aforementioned personal data is neither legally nor contractually required. However, without the IP address, the service and functionality of our website cannot be guaranteed. In addition, individual services may not be available or restricted. For this reason, an objection is excluded.',
      },
      {
        type: 'h2',
        text: 'Contact Form',
      },
      {
        type: 'h3',
        text: 'Nature and Purpose of Processing:',
      },
      {
        type: 'p',
        text: 'The data entered by you will be stored for the purpose of individual communication with you. This requires a valid email address and your name. This serves to assign the request and then answer it. The provision of further data is optional.',
      },
      {
        type: 'h3',
        text: 'Legal Basis:',
      },
      {
        type: 'p',
        text: 'The processing of the data entered into the contact form takes place on the basis of a legitimate interest (Art. 6 Para. 1 lit. f GDPR).',
      },
      {
        type: 'p',
        text: 'By providing the contact form, we would like to enable you to contact us easily. The information you provide will be stored for the purpose of processing the request and for potential follow-up questions.',
      },
      {
        type: 'p',
        text: 'If you contact us to request an offer, the processing of the data entered into the contact form serves to carry out pre-contractual measures (Art. 6 Para. 1 lit. b GDPR).',
      },
      {
        type: 'h3',
        text: 'Recipients:',
      },
      {
        type: 'p',
        text: 'Recipients of the data may be processors.',
      },
      {
        type: 'h3',
        text: 'Storage Period:',
      },
      {
        type: 'p',
        text: 'Data will be deleted no later than 6 months after processing the request.',
      },
      {
        type: 'p',
        text: 'If a contractual relationship arises, we are subject to the statutory retention periods according to the HGB and will delete your data after these periods have expired.',
      },
      {
        type: 'h3',
        text: 'Provision Required or Required:',
      },
      {
        type: 'p',
        text: 'The provision of your personal data is voluntary. However, we can only process your request if you provide us with your name, your email address, and the reason for the request.',
      },
      {
        type: 'h2',
        text: 'SSL Encryption',
      },
      {
        type: 'p',
        text: 'To protect the security of your data during transmission, we use state-of-the-art encryption methods (e.g., SSL) via HTTPS.',
      },
      {
        type: 'h2',
        text: 'Information About Your Right of Objection Under Art. 21 GDPR',
      },
      {
        type: 'h3',
        text: 'Individual Right of Objection',
      },
      {
        type: 'p',
        text: 'You have the right to object at any time, for reasons arising from your particular situation, to the processing of personal data concerning you, which is carried out on the basis of Art. 6 Para. 1 lit. f GDPR (data processing based on a balancing of interests); this also applies to profiling based on this provision within the meaning of Art. 4 No. 4 GDPR.',
      },
      {
        type: 'p',
        text: 'If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing that outweigh your interests, rights, and freedoms, or the processing serves to assert, exercise, or defend legal claims.',
      },
      {
        type: 'h3',
        text: 'Recipient of an Objection',
      },
      {
        type: 'address',
      },
      {
        type: 'h2',
        text: 'Change to Our Privacy Policy',
      },
      {
        type: 'p',
        text: 'We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy, e.g., when introducing new services. The new privacy policy will then apply to your next visit.',
      },
      {
        type: 'h2',
        text: 'Questions for the Data Protection Officer',
      },
      {
        type: 'p',
        text: 'If you have questions about data protection, please write us an email or contact the person responsible for data protection in our organization directly:',
      },
      {
        type: 'address',
      },
      {
        type: 'small',
        text: [
          'The privacy policy was created with the help of activeMind AG, the experts for ',
          {
            href: 'https://www.activemind.de/datenschutz/datenschutzbeauftragter/',
            label: 'external data protection officers',
          },
          ' (Version #2020-09-30).',
        ],
      },
    ],
  },
};
