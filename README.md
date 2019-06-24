Procedimento ingressar no Domínio

-- Install packages
yum -y install sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python samba-common-tools policycoreutils-devel

-- Add ao Dominio
realm join --user="nome-usuario-admin" "nome do dominio"


